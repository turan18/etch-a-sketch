

let size = prompt("How big should the grid be?")

createGrid(size)


function createGrid(size){
    let container = document.querySelector('.container')
    container.style.gridTemplateColumns=`repeat(${size},auto)`

    for (let index = 0; index < parseInt(Math.pow(size,2)); index++) {
        let block = document.createElement("div")
        block.classList.add("cube")
        container.appendChild(block)   
    }
    let cubes = document.getElementsByClassName("cube")
    
    for(let i=0;i<cubes.length;i++){
        let cube = cubes[i]
        cube.addEventListener('mouseover',staticChange)
    }  
}
function staticChange(){
    this.classList.add("changeColors")
}
function clearGrid(){
    Array.from(document.getElementsByClassName("cube")).forEach(element => {
        element.classList.remove("changeColors")
    });
   
}





