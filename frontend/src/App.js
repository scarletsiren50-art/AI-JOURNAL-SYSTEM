import React, { useState } from "react";
import axios from "axios";
import "./App.css";
function App() {
  const [text, setText] = useState("");
  const [entries, setEntries] = useState([]);
  const [analysis, setAnalysis] = useState(null);
  const [insights, setInsights] = useState(null);

  const userId = "123";

  const createEntry = async () => {
    await axios.post("http://localhost:5000/api/journal", {
      userId: userId,
      ambience: "forest",
      text: text
    });

    alert("Journal entry saved!");
  };

  const getEntries = async () => {
    const res = await axios.get(
      `http://localhost:5000/api/journal/${userId}`
    );
    setEntries(res.data);
  };

  const analyze = async () => {
    try{
      const res = await axios.post(
        "http://localhost:5000/api/journal/analyze", {
          text: text
        }
      );
      setAnalysis(res.data);
    } catch (error) {
      console.error(error);
    }
};

  const getInsights = async () => {
    const res = await axios.get(
      `http://localhost:5000/api/journal/insights/${userId}`
    );
    setInsights(res.data);
  };

  return (
    <div style={{padding:"40px", fontFamily:"Arial"}}>
      <h1>AI Journal System</h1>
      <textarea 
      rows="4"
      cols="50"
      placeholder="Write your journal..."
      value={text}
      onChange={(e)=>setText(e.target.value)}
      />
      <br/><br/>
      <button onClick={createEntry}>Save Entry</button>
      <button onClick={getEntries}>View Entries</button>
      <button onClick={analyze}>Analyze Emotion</button>
      <button onClick={getInsights}>Get Insights</button>

      <hr/>

      <h2>Journal Entries</h2>

      {entries.map(entry => (
        <div key={entry.id}>
          <p><b>Ambience:</b> {entry.ambience} </p>
          <p> {entry.text} </p>
          <hr/>
        </div>
      ))}

      <h2>Emotion Analysis</h2>

      {analysis && (
        <div>
          <p><b>Emotion:</b> {analysis.emotion} </p>
          <p><b>Keywords:</b> {analysis.keywords.join(",")} </p>
          <p> {analysis.summary} </p>
        </div>
      )}

      <h2>Insights</h2>

      {insights && (
        <div>
          <p><b>Total Entries:</b> {insights.totalEntries} </p>
          <p><b>Top Emotion:</b> {insights.topEmotion} </p>
          <p><b>Most Used Ambience:</b> {insights.mostUsedAmbience} </p>
          <p><b>Recent Keywords:</b> {insights.recentKeywords.join(",")} </p>
        </div>
      )}

    </div>
  );
}

export default App;