console.log("Hello World");

const h3 = document.querySelector("#id1");

// let response  = h3.getAttribute("class");
h3.setAttribute("width", "200");
h3.removeAttribute("class");
let response  = h3.getAttribute("class");
console.log(response);
console.log(h3.hasAttribute('class'));


const userCard = document.querySelector('#user_card')
console.log(userCard);
console.log(userCard.getAttribute("data-user-id"));
userCard.dataset.userId = "678";
console.log(userCard.getAttribute("data-user-id"));


j

