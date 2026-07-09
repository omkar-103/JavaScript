console.log("Hello World");

const bulp = document.querySelector('.bulp');
const btn = document.querySelector('button');



btn.addEventListener('click', () => {
  if( bulp.classList.toggle('light-up')){
    btn.textContent = "OFF";
  }else {
    btn.textContent = "ON";
  }
      
} )