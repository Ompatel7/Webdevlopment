import { useNavigate } from "react-router-dom";


function Support(){
    const navigate = useNavigate();

    function clickHandler(){
        navigate('/labs');
    }
    return (
        <div>
            This is Support Page
            <div>
            <button onClick={clickHandler}>Go to Labs</button>
            </div>
        </div>
    )
}

export default Support;