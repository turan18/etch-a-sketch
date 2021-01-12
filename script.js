let size = prompt("How big should the grid be?")
let container = document.querySelector('.container')

container.style.gridTemplateColumns=`repeat(${size},auto)`




for (let index = 1; index < parseInt(Math.pow(size,2))+1; index++) {
    let block = document.createElement("div")
    block.innerHTML=index
    block.style.border="1px solid black"

    container.appendChild(block)
}
