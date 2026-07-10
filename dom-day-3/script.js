console.log("Hello World");

// const h3 = document.querySelector("#id1");

// let response  = h3.getAttribute("class");
// h3.setAttribute("width", "200");
// h3.removeAttribute("class");
// let response  = h3.getAttribute("class");
// console.log(response);
// console.log(h3.hasAttribute('class'));


// const userCard = document.querySelector('#user_card')
// console.log(userCard);
// console.log(userCard.getAttribute("data-user-id"));
// userCard.dataset.userId = "678";
// console.log(userCard.getAttribute("data-user-id"));



// input.value vs input.getAttribute('value');
// const input = document.querySelector('input');
// const btn = document.querySelector('button');

// btn.addEventListener('click', () => {
//     console.log(input.value);
// })



// Creating, inserting and removing elements from DOM


// 1. Create Element
let footer =  document.createElement('footer');
console.log(footer);
document.body.appendChild(footer);

// 2. Insertion
                // appendChild -- old Version
                // append - new
const main = document.querySelector("main"); 
const span = document.createElement("span");
main.append(span);
span.innerHTML = "hey i am <i>Dynamic</i> ";

// Remove
main.removeChild(span);
