console.log("first")
const btn = document.querySelector('button');
btn.addEventListener('mouseover', (events) => {
    console.log(events);
    console.log("button trigger")
})

const div = document.querySelector('div');
const main = document.querySelector('main');
const body = document.body;
