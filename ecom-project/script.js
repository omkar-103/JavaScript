// console.log("Hello World")
const createb= document.querySelector('#create')
const formDiv = document.querySelector('.forms')
const closebtn = document.querySelector('#close')
const form = document.querySelector("form")
const productsarr = [];
 const productsDiv = document.querySelector('.products')

let ui = () => {
    productsDiv.innerHTML = "";
productsarr.forEach((elem) => {
productsDiv.innerHTML += ` <div class="product-card">
           
            <div class="img">
                <img src="${elem.url}">
            </div>

            <div class="text">
                <h3>${elem.name}</h3>
                <p>${elem.description}</p>
                <p>${elem.price}</p>
            </div>

            <div class="btns">
                <button onclick="updateProduct('${elem.name}')" id="update">Update</button>
                <button id="delete">Delete</button>
            </div>


        </div>`
})
}




createb.addEventListener('click', () => {
    formDiv.style.display = "flex";
})

closebtn.addEventListener('click', () => {
    formDiv.style.display = "none";
})

form.addEventListener('submit', (event) => {
// console.log("Hello");
event.preventDefault(); //to prevent reload

// taking the names
let name = event.target[0].value;
let description = event.target[1].value;
let price = event.target[2].value;
let url = event.target[3].value;


if (name.trim() === "" || name === " " || description.trim() === "" || price.trim() === "" || url === ""){
    alert("Please Fill all the fields")
    return;
}


let obj = {
    name,
    description,
    price,
    url
}

productsarr.push(obj);
console.log(productsarr);
form.reset();
ui();
 formDiv.style.display = "none";



})

const updateProduct = (name) => {
    let product = productsarr.find((elem) => elem.name === name);
    console.log(first)
}