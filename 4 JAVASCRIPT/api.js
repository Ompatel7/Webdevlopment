// let message = [10,20,30,40,50,60,70,80,90,100];
// console.log(message.reduce((acc,current) => {
//    return acc+current
// }))

const container = document.querySelector('.container');

async function request(){
  try{
    let call = await fetch('https://jsonplaceholder.typicode.com/photos')
    let res = await call.json();
    
    for (let i = 0; i <= 100; i++) {
     let img = document.createElement('img');
     let pera = document.createElement('p');
     let div = document.createElement('div');
     let span = document.createElement('span');
  
     img.setAttribute('src',`${res[i].url}`);
     div.setAttribute('class','box');
     pera.textContent = `${res[i].title}`;
     span.textContent = i;
  
     container.appendChild(div);
     div.appendChild(img);
     div.insertAdjacentElement('beforeend',pera);
     div.insertAdjacentElement('afterbegin',span);
  }
}
  catch(error){
    console.log('we have found an error ',error)
  }
}
request()

