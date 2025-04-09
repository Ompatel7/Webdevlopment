import { useNavigate } from "react-router-dom";

function About(){
    const navigate = useNavigate()

    function clickHandler(){
        navigate(-1);
    }
    return (
        <div>
            This is About Page
            <div>
                <button onClick={clickHandler}>Back</button>
            </div>
        </div>
    )
}

export default About;