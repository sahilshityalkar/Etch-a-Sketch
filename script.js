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