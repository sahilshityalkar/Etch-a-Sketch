const containerGrid = document.getElementById("gridContainer")
const innerContainer = document.getElementById("container")

function createGrid(size) {
  const container = document.getElementById('container');

  // Remove existing grid if it exists
  const existingGrid = container.querySelector('.grid');
  if (existingGrid) {
    container.removeChild(existingGrid);
  }

  // Create new grid
  const grid = document.createElement('div');
  grid.className = 'grid';
  grid.style.display = 'flex';
  grid.style.flexWrap = 'wrap';
  grid.style.width = '600px';
  grid.style.height = '600px';

  const squareSize = 600 / size;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.className = 'allDivs';
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    square.style.border = '1px solid black';
    square.style.boxSizing = 'border-box';
    square.style.margin = '0';
    square.style.padding = '0';
    square.style.display = 'inline-block';
    grid.appendChild(square);
  }
  container.appendChild(grid);
}

function reloadFunction() {
  location.reload();
}

function blackColorFunction(){
  let allDivs = document.querySelectorAll(".allDivs");
  allDivs.forEach(cell => cell.addEventListener("mouseover", changeGridColorclear));
  function changeGridColorclear(event) {
    event.target.style.backgroundColor = "black";
    event.target.style.opacity += 5;
}
}

function eraser() {
  let allDivs = document.querySelectorAll(".allDivs");
  allDivs.forEach(cell => cell.addEventListener("mouseover", changeGridColorclear));
  function changeGridColorclear(event) {
    event.target.style.backgroundColor = "rgb(255, 255, 255)";
    event.target.style.opacity += 5;
  }
}

function rgbcolor() {
  let allDivs = document.querySelectorAll(".allDivs");
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