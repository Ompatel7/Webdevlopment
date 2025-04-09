let count = document.getElementById('counter');
let value = parseInt(count.innerText);

console.log(count);
const getColor = () =>{
    const RandomNumber  = Math.floor(Math.random()* 16777215);
    const randomcode = '#'+RandomNumber.toString(16);
    console.log(RandomNumber,randomcode);

    document.body.style.backgroundColor = randomcode;
};

function Increment(){
    value += 1;

    count.innerText = value;
};

function Decriment(){
    value -= 1;
    
    count.innerText = value;
};

let btn = document.querySelectorAll('.btn');

// *** this will not work
// btn.addEventListener('click', function(){
//     console.log('hello');
//     console.log(Math.floor(Math.random()*50));
// })

btn.forEach(function(btn){
    btn.addEventListener('click',getColor);
});