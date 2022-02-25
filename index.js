
// let rectangle = document.getElementById("rectangle");
//   let box = document.createElement("div");

function createBox() {
  
        let box = document.createElement("div");
    box.setAttribute('class', 'itembox');
    let rectangle = document.getElementById("rectangle");
    rectangle.appendChild(box);
  rectangle.style.display = "block";
    
   
}

function removedivision() {
    rectangle.style.display = "none";
}
