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

function rgbcolor(){
    let allDivs = document.querySelectorAll(".block");
        allDivs.forEach(cell => cell.addEventListener("mouseover", changeGridColor));
        function changeGridColor(event2) {
            let a = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);
            let c = Math.floor(Math.random() * 256);
            event2.target.style.backgroundColor = `rgb(${a}, ${b}, ${c})`;
            event2.target.style.opacity += 2;
          
            console.log(event2)
          }
        }
        createInputGrid()
function createInputGrid(){
    // alert("Enter a density of grid(number is under 100)")
    for (let i = 0 ; i < 256 ; i++){
        const div = document.createElement("div")
        div.classList.add("block")
        createDiv.appendChild(div)
    }
}

// function gridDensity() {
//     createDiv.innerHTML= "";
//     let userInput = prompt("Please enter your name:", 16);
//     createDiv.style.setProperty(
//         "grid-template-columns",
//         `repeat(${userInput.value}, 2fr)`
//       );
//       createDiv.style.setProperty(
//         "grid-template-rows",
//         `repeat(${userInput.value}, 2fr)`
//       );
//       for (let i = 0; i < userInput.value * userInput.value; i++) {
//         const div = document.createElement("div");
//         div.classList.add("block");
//         createDiv.appendChild(div);
//       }
// }

