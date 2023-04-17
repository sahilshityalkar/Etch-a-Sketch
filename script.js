function createGrid(size) {
    const container = document.getElementById("container");
    container.style.display = "flex";
    container.style.flexWrap = "wrap";
    container.style.width = "600px";
    container.style.height = "600px";
    const squareSize = container.offsetWidth / size;
  
    for (let i = 0; i < size * size; i++) {
      const square = document.createElement("div");
      square.style.width = `${squareSize}px`;
      square.style.height = `${squareSize}px`;
      square.style.border = "1px solid black";
      square.style.boxSizing = "border-box";
      square.style.margin = "0"; // set margin to 0
      square.style.padding = "0"; // set padding to 0
      square.style.display = "inline-block"; // set display to inline-block
      // square.addEventListener("mouseover", function() {
      //   this.style.backgroundColor = "black";
      // });
      container.appendChild(square);
    }
  }

  function reloadFunction(){
    location.reload();
  }
  
  function blackColorFunction(){
    const allDivs = document.getElementById()
  }