import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios'

function Image() {

    const name = 'bike';
    const url = `https://www.googleapis.com/customsearch/v1?key=AIzaSyDIp93IFNFDSn54sVKW1Y3darct9wGcW9M&cx=01eb4d3dd893b430c&q=${name}&searchType=image`;

    const [imageUrl,setUrl] = useState([]);
    const [loader,setLoader] = useState(false)

    const getPhotos = async()=>{
        setLoader(true);
        try{
            const {data} = await axios.get(url);
            setUrl(data.items);
            console.log(data);
        }
        catch(error){
            console.log(error);
        }
        setLoader(false)
    }

    useEffect(()=>{
        getPhotos();
    },[]);
  return (
    <div>
        {
            imageUrl.map((image)=>(
                <div>
                    <img src={image.link}/>
                </div>
            ))
        }
    </div>
  )
}

export default Image