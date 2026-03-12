exports.analyzeEmotion = async (text) => {
    let emotion = "neutral";
    let keywords = [];

    if(text.includes("calm")) emotion = "calm";
    if(text.includes("happy")) emotion = "happy";
    if(text.includes("sad")) emotion = "sad";

    keywords = text.split(" ").slice(0,3);

    return {
        emotion,
        keywords,
        summary: "User emotional state analysis"
    };
}