const form = document.querySelector('form')

const name = document.querySelector('#name');
const age = document.querySelector('#age');


// Form Handling ka pahila step
form.addEventListener("submit", (events) => {
events.preventDefault() //Form ko page reload karne se rokhti hai
console.log("Form Event triggered")
console.log(name.value);
console.log(age.value);
})


