import { useNavigate } from "react-router-dom";

function Labs(){
    const navigate = useNavigate();

    function clickHandler(){
        navigate('/support')
    }
    return (
        <div>
            This is Labs Page
            <div>
            <button onClick={clickHandler}>Go to Support</button>
            </div>
        </div>
    )
}

export default Labs;