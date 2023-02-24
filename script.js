function gridSize(cols){
    let columnas = cols;
    console.log(`columnas = ${columnas}`); //CONSOLE
    
    let totales = Math.pow(columnas, 2);
    console.log(`totales = ${totales}`); //CONSOLE
    
    let container = document.querySelector('.container');
    let contWidth = getComputedStyle(container).getPropertyValue('width');
    
    let containerWidth = contWidth.slice(0, contWidth.length - 2);;
    console.log(`containerWidth = ${containerWidth}`);

    for(let i = 1; i <= totales; i++){
        let pixel = document.createElement('div');
        pixel.className = 'pixel';
        container.appendChild(pixel);
    }
    
    let ancho = containerWidth/columnas;
    let pixeles = document.querySelectorAll('.pixel');

    //let flexBa = Math.floor(100/cols);
    let flexBa = 100/cols;
    
    for (let i = 0; i < pixeles.length; i++){
        pixeles[i].style.width = `${ancho}px`;
        pixeles[i].style.height = `${ancho}px`;
        console.log(`ancho = ${ancho}`);
        pixeles[i].style.flexBasis = `${flexBa}%`;
    }

    etchasketch();
   
    console.log(`FIN`);
}

 //Etch-A-Sketch
 function etchasketch (){
    let pixs = document.querySelectorAll('.pixel');
    pixs.forEach(function(item){
        item.addEventListener("mouseover", () => {
            item.classList.add('hover');
        })
    })
}


gridSize(16);

function customSize (){
    let size = 0;
    do{
        if(size > 100){
            alert('Too large! Something smaller, please');
        }
        size = prompt('Insert the number of pixels in the Etch-A-Sketch');
    }
    while(size > 100);
    
    //Reiniciador
    const restartPixels = document.querySelectorAll('.pixel');
    restartPixels.forEach(pixel => {
        pixel.remove();
    });

    gridSize(size);
}


/*
let columnas = 16;
let totales = Math.pow(columnas, 2);
let container = document.querySelector('.container');

for(let i = 1; i <= totales; i++){
    let pixel = document.createElement('div');
    pixel.className = 'pixel';
    container.appendChild(pixel);
}

//CONTAINER WIDTH
let contWidth = getComputedStyle(container).getPropertyValue('width');
let containerWidth = contWidth.slice(0, contWidth.length - 2);;



let ancho = containerWidth/columnas;
let pixeles = document.querySelectorAll('.pixel');
for (let i = 0; i < pixeles.length; i++){
    pixeles[i].style.width = `${ancho}px`;
    pixeles[i].style.height = `${ancho}px`;
    pixeles[i].style.flexBasis = '6%';
}

*/