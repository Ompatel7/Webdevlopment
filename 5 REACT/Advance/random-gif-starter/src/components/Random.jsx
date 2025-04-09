import useGif from "../hooks/useGif";
import { Spinner } from "./Spinner";


export default function Random() {

  const {gif,loader,FatchData} = useGif();

  return (
  <div className="w-1/2 mt-[20px] bg-green-500 rounded-lg border border-black 
  flex flex-col items-center gap-y-4 ">

    <h1 className="text-xl mt-[10px] uppercase underline font-bold">A Random Gif</h1>

    {
      loader ? (<Spinner/>) : (<img src={gif} width='450' alt="GIf"/>)
    }

    <button className="w-10/12 mb-[20px] bg-yellow-500 text-lg py-1 rounded-lg font-medium" onClick={() => { FatchData() } }>GENRATE</button>
  </div>
  );
}
