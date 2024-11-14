import axios from "axios";
import { useState } from "react"

function Input({ recommendationData }) {
  const [input, setInput] = useState("");

  const handleRecommender = async () => {
    const server = `https://aljabar-backend-production.up.railway.app/match?song=${input}`;
    // const local = `http://localhost:8000/match?song=${input}`
    try {
      const { data } = await axios.get(server)
      recommendationData(data);
    } catch (error) {
      console.log(error);
    }

  }
  
  return (
    <>
    
      <div className="input-section">
        <input
          type="text"
          placeholder="Masukan Judul Lagu"
          value={input} 
          onChange={(event) => setInput(event.target.value)} /> 
        <button onClick={() => handleRecommender()} >Rekomendasi</button>
      </div>
    </>
  )
}

export default Input