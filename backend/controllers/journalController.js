const db = require("../database");
const { analyzeEmotion } = require("../services/llmService");

exports.createEntry = (req,res)=>{
    const {userId, ambience, text} = req.body;

    const sql = `
    INSERT INTO journals (userId, ambience, text)
    VALUES (?, ?, ?)
    `;

    db.run(sql,[userId, ambience, text], function(err) {
        if(err) {
            return res.status(500).json(err.message);
        }
        res.json({
            id:this.lastID,
            userId,
            ambience,
            text
        });
    });
};

exports.getEntries = (req,res) => {
    const userId = req.params.userId;

    db.all(
        "SELECT * FROM journals WHERE userId = ?",
        [userId],
        (err,rows) => {
            if(err) {
                return res.status(500).json(err.message);
            }
            res.json(rows);
        }
    );
};

exports.analyzeEntry = async(req,res) => {
    const result = await analyzeEmotion(req.body.text);
    res.json(result);
};

exports.getInsights = (req,res) => {
    const userId = req.params.userId;

    db.all(
        "SELECT * FROM journals WHERE userId = ?",
        [userId],
        (err, rows) => {
            if (err) {
                return res.status(500).json(err.message);
            }
            const totalEntries = rows.length;

            let emotionCount = {};
            let ambienceCount = {};
            let keywords = [];

            rows.forEach(entry => {
                if(entry.emotion){
                    emotionCount[entry.emotion] = (emotionCount[entry.emotion] || 0) + 1;
                }
                if(entry.ambience) {
                    ambienceCount[entry.ambience] = (ambienceCount[entry.ambience] || 0) + 1;
                }
                if(entry.keywords){
                    keywords.push(...entry.keywords.split(","));
                }
            });

            const topEmotion = Object.keys(emotionCount).reduce((a,b)=> emotionCount[a] > emotionCount[b] ? a:b, "none");

            const mostUsedAmbience = Object.keys(ambienceCount).reduce((a,b)=> ambienceCount[a] > ambienceCount[b] ? a:b, "none");

            const recentKeywords = keywords.slice(-5);

            res.json({
                totalEntries,
                topEmotion,
                mostUsedAmbience,
                recentKeywords
            });
        }
    );
};