// console.log("Hello World")
const createb= document.querySelector('#create')
const formDiv = document.querySelector('.forms')
const closebtn = document.querySelector('#close')
const form = document.querySelector("form")

const productsarr = JSON.parse(localStorage.getItem("products")) || [];
let lsd = JSON.parse(localStorage.getItem("products"));
console.log(lsd)

const productsDiv = document.querySelector('.products')
 let upadteIndex = null;


let ui = () => {
    productsDiv.innerHTML = "";
productsarr.forEach((elem, index) => {
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
                <button id="delete" onclick="deleteProduct(${index})">Delete</button>
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


if(upadteIndex != null){
productsarr[upadteIndex] = obj;
upadteIndex = null;

}else {
    productsarr.push(obj);
}

// Save after add/update
localStorage.setItem('products', JSON.stringify(productsarr));

console.log(productsarr);
form.reset();
ui();
formDiv.style.display = "none";



})


// Update Products 
const updateProduct = (name) => {
    formDiv.style.display = "flex";
    let product = productsarr.find((elem) => elem.name === name);
    upadteIndex = productsarr.findIndex((elem) => elem.name === name);
    console.log("Selected Product:- ", product);

    form[0].value = product.name;    
    form[1].value = product.description;
    form[2].value = product.price;
    form[3].value = product.url;   
    
};

// Delete Product
const deleteProduct = (index) => {
    productsarr.splice(index, 1);
    localStorage.setItem('products', JSON.stringify(productsarr));
    ui();
};


// Save to Loca Storage
// localStorage.setItem('name', 'nitin gadkari')
// localStorage.setItem('song', 'tera mera khatam')

// let lsd = localStorage.getItem("name");
// console.log(lsd)


// let data = [
//     {
//         name:"piyush",
//         age:69,
//         address:"saket nagar",
//         pincode:400012
//     },
//      {
//         name:"cdf",
//         age:269,
//         address:"xcsdcds nagar",
//         pincode:24234
//     },
//      {
//         name:"cdscdcdsc",
//         age:69,
//         address:"sacwdfrgket nagar",
//         pincode:40003112
//     },
// ];



// localStorage.setItem("fampeople", JSON.stringify(data))
// let lsd = localStorage.getItem("fampeople")
// console.log(JSON.parse(lsd) )


ui();