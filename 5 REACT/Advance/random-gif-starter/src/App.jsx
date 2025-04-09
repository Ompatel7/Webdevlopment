import Random from "./components/Random";
import Tag from './components/Tag'

export default function App() {

  return (
    <div className="w-full h-screen background flex flex-col items-center ">
      <h1 className="bg-white w-10/12 mt-[20px] py-4 rounded-xl text-center text-2xl font-bold">RANDOM GIFS</h1>
      <div className="flex flex-col w-full items-center gap-y-10 mt-[30px] ">
        <Random />
        <Tag/>
      </div>
    </div>
  );
}
