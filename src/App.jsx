import { useState } from 'react'
import axios from "axios"
import './App.css'
import HashLoader from "react-spinners/HashLoader"

function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading , setLoading] = useState(false);
  const [override, setOverride] = useState(true);

  var s="here is some skill stats about a leetcode user "+question+" generate 10 pointwise tips in 250 words how he can improve, also answer the question as if replying to the user himself (keep the response with no formatting, in simple paragraph)"
    async function getUserStats(){
      try {
      const response = await axios({
        url:"https://alfa-leetcode-api.onrender.com/skillStats/"+question,
        method:"get"
      })
      const allproblems = response["data"]["data"]["matchedUser"]["tagProblemCounts"];
      for (let category in allproblems) {
        let tagsArray = allproblems[category];
        for (let i = 0; i < tagsArray.length; i++) {
          s += tagsArray[i]["tagName"] + ": " + tagsArray[i]["problemsSolved"] + ", ";
        }
      }
      const response1 = await axios({
        url:"https://alfa-leetcode-api.onrender.com/"+question+"/solved",
        method:"GET"
      })
      const typesprob= response1["data"]["acSubmissionNum"];
      for(let types1 in typesprob){
        s+= typesprob[types1]["difficulty"]+": "+typesprob[types1]["count"]+", ";
      }
    } catch (error) {
      console.log(error);
      setAnswer("Invalid Username")
      setLoading(false);
      return;
    }
    } 
    async function generateRes() {
      try {
        setLoading(true);
        setAnswer("");
        try {
          await getUserStats();
        } 
        catch (error) {
          console.error("Error in getUserStats:", error);
          setAnswer("Invalid Username or Error fetching user stats.");
          setLoading(false);
          return;
        }
        console.log(s);
        const response = await axios({
          url: `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${import.meta.env.VITE_GEMINI_API_KEY}`,
          method: 'post',
          data: { 
            contents: [{ 
              parts: [{ text: s }] 
            }] 
          }
        });
        
        
        const formatResponse = (text) => {
          const lines = text.split('\n');
          return lines.map((line, index) => {
            const parts = line.split(/(\*\*[^*]+\*\*)/);
            return (
              <div key={index}>
                {parts.map((part, idx) =>
                  part.startsWith('**') && part.endsWith('**') ? (
                    <strong key={idx}>{part.slice(2, -2)}</strong>
                  ) : (
                    part
                  )
                )}
              </div>
            );
          });
        };
        setAnswer(formatResponse(response.data.candidates[0].content.parts[0].text));
      } 
      catch (error) {
        console.error("Error generating response:", error);
        setAnswer("An error occurred while generating the roast.");
      } 
      finally {
        setLoading(false);
      }
    }

  return (
    <>
      <h1>Leetcode Helper</h1>
      <textarea placeholder="Enter username to get suggestions" onKeyDown={(e) => {
        if(e.keyCode == 13) generateRes();
      }} value={question} onChange={(e)=>setQuestion(e.target.value)} 
      cols="35" 
      rows="10"
      ></textarea>
      <br/>
      <button disabled={loading} onClick={generateRes}>Generate!</button>
      <br/>
      {loading && <div className="sweet-loading"> 
      <HashLoader
        color="#FFFFFF"
        loading={loading}
        cssOverride={override}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>}
      {answer && <p>{answer}</p>}
    </>
  )
}

export default App
