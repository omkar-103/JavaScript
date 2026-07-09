console.log("Hello World");

const bulp = document.querySelector('.bulp');
const btn = document.querySelector('button');

let flag = true;

btn.addEventListener('click', () => {
    if (flag){
    bulp.style.backgroundColor = "yellow";
    btn.innerHTML = "OFF";
    flag = false;
    } else {
    bulp.style.backgroundColor = "white";
    btn.innerHTML = "ON";
    flag = true;
    }
    
} )