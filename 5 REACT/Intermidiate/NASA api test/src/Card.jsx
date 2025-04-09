// import { API_URL, API_URL } from "./data";
import { useEffect, useState } from "react";


function Card() {
    
    const [infovalue, setinfoValue] = useState("2024-04-07");


    // const api_key = '9CylsNnzGDmGvXY9vNLRr80xGHNbesP3VFfA6hOr';
    const api_key = import.meta.env.VITE_API_KEY;
    const API_URL = `https://api.nasa.gov/planetary/apod?api_key=${api_key}&date=${infovalue}`;

    const [output,setOutput] = useState([]);


  async function Astro() {
    const response = await fetch(API_URL);
    const data = await response.json();
    console.log(data);
    setOutput(data);
  }
  useEffect(() => {
    Astro();
  }, [infovalue]);

  function infoTrack(event){
    let info = event.target.value;
    // console.log(info);
    setinfoValue(info);

  }
//   console.log(infovalue);

  return (
    <>
      <div>everything is fine</div>
      <img src={output.hdurl}></img>
      <br>
      </br>
      <h2>{output.title}</h2>
      <h2>{output.date}</h2>
      <p>{output.explanation}</p>

     <input type="date" onChange={infoTrack}/>


      

      
      
    </>
  );
}

export default Card;