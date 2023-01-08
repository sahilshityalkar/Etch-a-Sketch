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


function createGrid(input){
    for (let i = 0 ; i < input * input ; i++){
        const div = document.createElement("div")
        div.classList.add("block")
        createDiv.appendChild(div)
    }
    // createDiv.style.setProperty(
    //     "grid-template-columns",
    //     `repeat(16,2fr)`       
    //     )
    //     createDiv.style.setProperty(f
    //         "grid-template-rows",
    //         `repeat(16,2fr)`       
    //         )
}

function blackcolor(){
    let allDivs = document.querySelectorAll(".block");
    allDivs.forEach(cell => cell.addEventListener("mouseover", changeGridColorBlack));
    function changeGridColorBlack(event){
        event.target.style.backgroundColor = "black";
        event.target.style.opacity += 0.9;
    }
}

function eraser(){
    let allDivs = document.querySelectorAll(".block");
    allDivs.forEach(cell => cell.addEventListener("mouseover", changeGridColorclear));
    function changeGridColorclear(event){
        event.target.style.backgroundColor = "rgb(255, 255, 255)";
        event.target.style.opacity += 5;
    }
}