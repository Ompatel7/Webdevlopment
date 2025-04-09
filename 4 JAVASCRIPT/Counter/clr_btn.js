let bgcolor = document.querySelector('body') ;
let bgcolor2;
function colorRed(){
    bgcolor.style.cssText = 'background-color:red; transition: 1s;';
    bgcolor2 = 'RED';
    console.log(`red btn is clicked`);
    console.log(`value of background is ${bgcolor2}`);
};

function colorGreen(){
    bgcolor.style.cssText = 'background-color:green; transition: 1s;';
    bgcolor2 = 'Green';
    console.log("Green btn is clicked");
    console.log(`value of background is ${bgcolor2}`);
};

function colorBlue(){
    bgcolor.style.cssText = 'background-color:blue; transition: 1s;';
    bgcolor2 = 'blue';
    console.log("Blue btn is clicked");
    console.log(`value of background is ${bgcolor2}`);
};