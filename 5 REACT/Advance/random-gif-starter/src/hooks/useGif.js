import { useState,useEffect } from "react";
import axios from 'axios';



  const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
  const Url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
//   const tagUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`


  const useGif = (tag) => {

  const [gif,setGif] = useState('')
  const [loader,setLoader] = useState(false);

  async function FetchData(){
    setLoader(true)

    const {data} = await axios.get(tag ? `${Url}&tag=${tag}` : Url);
    const imageSource = data.data.images.downsized.url;
    setGif(imageSource);
    setLoader(false);
  }

  useEffect( () => {
    FetchData();
  },[])

  
  return {gif,loader,FetchData};
}

export default useGif;