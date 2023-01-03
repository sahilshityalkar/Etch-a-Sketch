let createDiv = document.getElementById('stetch-box')
let btnblack = document.getElementById('blackButton')
// let div = document.createElement("div")
// div.style.width= "100px";
// div.style.height= "100px";
// div.style.background= "red";
// createDiv.appendChild(div)

createDensityBtn.addEventListener('click',getInput)
let input;

function getInput(){
  
    createDiv.innerHTML= "";
   input = prompt('enter your grid size', 16)
   createGrid(input)


}