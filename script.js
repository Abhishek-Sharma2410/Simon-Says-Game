let hamburger = document.getElementById("hamburger-button");
let otherDiv = document.querySelector(".other-projects");
hamburger.addEventListener("click", ()=>{
    otherDiv.classList.toggle("active");
})

let close = document.getElementById("close-button");
close.addEventListener("click", ()=>{
    otherDiv.classList.toggle("active");
})


let level = 0;
let colorSequence = ["green", "red", "blue", "yellow"];
let gameSequence = [];
let userSequence = [];
let heading = document.getElementById("level");
document.addEventListener("keypress", ()=>{
  if(level==0) {
    level++;
    changetextAndLevel(level); 
    console.log(level);
    let color = chooseRandom(colorSequence);
    let button = document.getElementById(`${color}`);
    flashButton(button);
    gameSequence.push(color);
    console.log(gameSequence);
    }  
})

let greenButton = document.getElementById("green");
let redButton = document.getElementById("red");
let blueButton = document.getElementById("blue");
let yellowButton = document.getElementById("yellow");

greenButton.addEventListener("click", ()=>{
    userSequence.push("green");
    let button = document.getElementById("green");
    flashButton(button);
})
redButton.addEventListener("click", ()=>{
    userSequence.push("red");
    let button = document.getElementById("red");
    flashButton(button);
})
blueButton.addEventListener("click", ()=>{
    userSequence.push("blue");
    let button = document.getElementById("blue");
    flashButton(button);
})
yellowButton.addEventListener("click", ()=>{
    userSequence.push("yellow");
    let button = document.getElementById("yellow");
    flashButton(button);
})  

function changetextAndLevel(level){
    heading.innerText = `Level ${level}`;
}

let chooseRandom = (colorSequence)=>{
    return colorSequence[Math.floor(Math.random()*4)];
}

let flashButton = (divId)=>{
    divId.classList.add("flash");
    setTimeout(()=>{
        divId.classList.remove("flash");
    },200)
}