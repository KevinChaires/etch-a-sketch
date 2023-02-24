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
        pixel.setAttribute("id", i);
        container.appendChild(pixel);
    }
    
    let ancho = containerWidth/columnas;
    let pixeles = document.querySelectorAll('.pixel');

    let flexBa = 100/cols;
    
    for (let i = 0; i < pixeles.length; i++){
        pixeles[i].style.width = `${ancho}px`;
        pixeles[i].style.height = `${ancho}px`;
        console.log(`ancho = ${ancho}`);
        pixeles[i].style.flexBasis = `${flexBa}%`;
    }

    etchasketch();
    
 
 
    //Etch-A-Sketch
 function etchasketch (){

    let pixs = document.querySelectorAll('.pixel');
    pixs.forEach(function(item){
        item.addEventListener("mouseover", () => {
            item.classList.add('hover');
        })
    })
}

   
    console.log(`FIN`);
}











gridSize(16);

function customSize (){
    let size = 16;
    do{
        if(size > 100){
            alert('Too large! Something smaller, please');
        }
        else if (size <= 0){
            alert('Too small! Something larger, please');
        }
        size = prompt('Insert the number of pixels in the Etch-A-Sketch');
    }
    while(size > 100 || size <= 0);
    
    //Reiniciador
    const restartPixels = document.querySelectorAll('.pixel');
    restartPixels.forEach(pixel => {
        pixel.remove();
    });

    gridSize(size);
}

/* Random Colors
function etchasketchrgb (){

    
    let pixs = document.querySelectorAll('.pixel');
    pixs.forEach(function(item){
        item.addEventListener("mouseover", () => {
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            item.style.backgroundColor = `rgb(${r},${g},${b})`;
            //item.classList.add('hover');
        })
    })
}
*/
