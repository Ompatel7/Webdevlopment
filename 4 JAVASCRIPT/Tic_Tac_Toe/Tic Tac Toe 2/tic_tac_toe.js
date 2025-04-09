let boxes = document.querySelectorAll(".box");
let restBtn = document.querySelector('.rest-btn');
let msg = document.querySelector('.msg');
let msgContainer = document.querySelector('.msg-container');
let newBtn = document.querySelector('.new-btn')

let turnO = true ; //PlayerO , PlayerX
let count = 0 ; // for draw condition

const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        
        if(turnO){
            box.style.color = "black";
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.style.color = "red";
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        // checkWinner();
        count++;

        let iswinner = checkWinner();

        if(count === 9 && !iswinner){
            msg.innerText = "Game was Draw ";
            msgContainer.classList.remove("hide");
            disableBoxes();
        }
    });

});

const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const RestGame = () =>{
    turnO = true;
    enableBoxes();
    newBtn.classList.add("hide");
    msgContainer.classList.add("hide");
}

const disabledBoxes = () =>{
    for(let box of boxes){
        box.disabled = true ;

    }
}
const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) =>{
    msg.innerText = `Congratulation Winner is "${winner}"`;
    newBtn.classList.remove("hide");
    msgContainer.classList.remove("hide");

}
const checkWinner = ()=>{
    for(let pattern of winPattern){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("winner " ,pos1Val);
                disabledBoxes();
                showWinner(pos1Val);
                return true;
            }
        }
    }  
};

restBtn.addEventListener('click', RestGame);
newBtn.addEventListener('click',RestGame);