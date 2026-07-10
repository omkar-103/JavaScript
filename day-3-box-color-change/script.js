// Insert Before
const main = document.querySelector("main");


const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const box3 = document.querySelector(".box3");

box2.style.backgroundColor = "yellow";
box3.style.backgroundColor = "blue";

main.insertBefore(box2, box1);
