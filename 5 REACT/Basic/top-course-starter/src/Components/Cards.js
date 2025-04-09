import Card from "./Card";
import { useState } from "react";

function Cards(props){
    let courses = props.courses;
    let category = props.category;
    const [likedCourses, setLikedCourses] = useState([]);

    function getCourses(){
        if (category === 'All'){
            let allCourses = [];
            Object.values(courses).forEach((array)=>{
                array.forEach((courseData)=>{
                    allCourses.push(courseData);
                })
            })
            return allCourses;
        }   
        else{
            // returns only specific category data
            return courses[category];
        }  
}
    return (
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {
                getCourses().map((courses)=>(
                    <Card 
                    key={courses.id} 
                    courses={courses}
                    likedCourses={likedCourses}
                    setLikedCourses={setLikedCourses} />
                ))
            }
        </div>
    );
};

export default Cards;