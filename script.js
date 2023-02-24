let columnas = 16;
let totales = columnas*columnas;
let container = document.querySelector('.container');

for(let i = 1; i <= totales; i++){
    let pixel = document.createElement('div');
    pixel.className = 'pixel';
    container.appendChild(pixel);
}

let ancho = 600/16;
let pixeles = document.querySelectorAll('.pixel');
for (let i = 0; i < pixeles.length; i++){
    pixeles[i].style.width = `${ancho}px`;
    pixeles[i].style.height = `${ancho+10.5}px`;
    pixeles[i].style.flexBasis = '6%';
}

//Etch-A-Sketch
pixeles.forEach(function(item){
    item.addEventListener("mouseover", () => {
        console.log('test');
        item.classList.add('hover');
    })
})



//Ancho
/*
function a(){
let ancho = document.querySelector('.pixel').offsetWidth;
console.log(ancho);

let pixeles = document.querySelectorAll('.pixel');
for(let i = 0; i < pixeles.length; i++){
    pixeles[i].style.height = `${ancho}px`;
    console.log(i + ancho)
}
}

a();
*/