import { useState } from "react";
import { Spinner } from "./Spinner";
import useGif from "../hooks/useGif";



export default function Tag() {

  const [tag,setTag] = useState('cute cats');

  const {gif,loader,FetchData} = useGif(tag);

  
  return (
  <div className="w-1/2 mt-[20px] bg-blue-500 rounded-lg border border-black 
  flex flex-col items-center gap-y-4 ">

    <h1 className="text-xl mt-[10px] uppercase underline font-bold">Random {tag} Gif</h1>

    {
      loader ? (<Spinner/>) : (<img src={gif} width='450' alt="GIf"/>)
    }

    <input type="text" className="w-10/12 text-center text-lg py-1 rounded-lg font-medium" value={tag}
     onChange={(event) => { setTag(event.target.value) }} />

    <button className="w-10/12 mb-[20px] bg-yellow-500 text-lg py-1 rounded-lg font-medium" onClick={() => FetchData()}>GENRATE</button>
  </div>);
}