import { useEffect, useState } from "react";
import React from "react";
import { Products }  from "../Components/Products";
import Spinner   from '../Components/Spinner'


export function Home() {
   const API_URL = "https://fakestoreapi.com/products";

   const [loading,setLoading] = useState(false);
   const [posts, setPosts] = useState([]);

  
    async function FatchProductdata(){
        setLoading(true);
    
        try{
        const response = await fetch(API_URL);
        const output = await response.json();
        console.log(output);
        setPosts(output)   
         } 
       
      catch(error){
        console.log('network error occor');
        setPosts([]);
     }

     setLoading(false);
   }

   useEffect(() => {
      FatchProductdata(); 
   },[])

    return (
       <div>
        {
            loading ? <Spinner/> :
             posts.length > 0 ? 
               <div>
                {
                posts.map((post) => (
                   <Products key={post.id} post={post}/>
                ) )
               }
               </div> :
            <div>
              <p>No Data Found</p>
            </div>
        }
       </div>
    )  
}

// export default Home;