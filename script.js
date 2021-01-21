function createGrid(size){
    
    let container = document.querySelector('.container')
    
    container.innerHTML=' ';
    container.style.gridTemplateColumns=`repeat(${size},auto)`

    for (let index = 0; index < parseInt(Math.pow(size,2)); index++) {
        let block = document.createElement("div")
        block.classList.add("cube")
        container.appendChild(block)   
    }
    Array.from(document.getElementsByClassName("cube")).forEach(element=>{
        element.addEventListener('mouseover',staticChange)
    });

    if(document.getElementById('on').checked){
        Array.from(document.querySelectorAll('.cube')).forEach(element=>{
            element.style.border="1px solid black"
        });
    }
}


function staticChange(){
    let pencolor = document.getElementById("penColor").value;
    this.style.backgroundColor=pencolor;
    this.classList.add("touched");
}




function displayOption(name){
    let bubbles = ['.speech-bubble','.speech-bubble2','.speech-bubble3']
    let bubble = document.querySelector(name)
    
    for(let i=0;i<bubbles.length;i++){
        if(bubbles[i]===name){
            bubbles.splice(i,1);
        }
    }
    let r1 = document.querySelector(bubbles[0]);
    let r2 = document.querySelector(bubbles[1]);
    
    if (bubble.style.display === "none") {
        r1.style.display = "none";
        r2.style.display = "none";
        bubble.style.display = "block";
      } else {
        bubble.style.display = "none";
      }
}

function getUserColor(){
    let bkgcolor = document.getElementById("bkgColor").value;
    let pencolor = document.getElementById("penColor").value;
    console.log(bkgcolor);
    console.log(pencolor);
    document.documentElement.style.setProperty('--bkg-color', bkgcolor);
    document.documentElement.style.setProperty('--pen-color', pencolor);
}
function clearGrid(){
    let bkgcolor = document.getElementById("bkgColor").value;
    let touchedcubes = document.getElementsByClassName("touched");
    console.log(touchedcubes);
    for(let i=0;i<touchedcubes.length;i++){
        touchedcubes[i].style.backgroundColor=null;
    }
}
function anim(time){
    time = time + 'ms'
    console.log(time)
    document.documentElement.style.setProperty('--effect-time', time);
    Array.from(document.querySelectorAll(".cube")).forEach(element=>{
        element.style.transitionDuration=time;
    });
}
function eraser(){
    // Not Implemented yet
}
