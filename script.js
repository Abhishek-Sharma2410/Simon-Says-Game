let hamburger = document.getElementById("hamburger-button");
let otherDiv = document.querySelector(".other-projects");
hamburger.addEventListener("click", ()=>{
    otherDiv.classList.toggle("active");
})

let close = document.getElementById("close-button");
close.addEventListener("click", ()=>{
    otherDiv.classList.toggle("active");
})