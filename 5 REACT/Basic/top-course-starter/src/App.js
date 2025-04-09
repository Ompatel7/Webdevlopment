import React, { useEffect, useState } from "react";
import { apiUrl,filterData } from "./data";
import NavBar from "./Components/NavBar";
import Filter from "./Components/Filter";
import Cards from "./Components/Cards";
import Spinner from "./Components/Spinner";
import { toast } from "react-toastify";

const App = () => {

  const [courses,setCourses] = useState(null);
  const [loading,setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);
  const [errorpage,setError] = useState(false);


  async function fetchData(){
    setLoading(true)
    try{
      let response = await fetch(apiUrl);
      let output = await response.json();
      // Output ->
      setCourses(output.data);
    }
    catch(error){
      console.log('hello eveyone')
      setError(true);
      toast.error("Network error occur")
    }
    setLoading(false);
  }

  useEffect(()=>{
    fetchData();
  },[])

  if(errorpage){
    return(<div>
      <h1>
        Error 404 Network problem
      </h1>
    </div>);
  }

  return (
    <div className="min-h-screen flex flex-col bg-bgDark2">
      <div>
        <NavBar/>
      </div>
      <div className="bg-bgDark2">
      <div>
        <Filter 
          filterData={filterData}
          category={category}
          setCategory={setCategory}
          />
      </div>
      
     
      <div className="w-11/12 max-w-[1200px] 
        mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
        {
            loading ? (<Spinner/>) : (<Cards courses={courses} category={category}/>)
          }
        </div>

      </div>
    </div>
  )
};

export default App;
