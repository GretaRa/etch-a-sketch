//Create a webpage with a 16x16 grid of square divs

const container = document.querySelector('.container');

function makeGrid(rows,cols){
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for(c = 0; c < (rows * cols); c++){
        let box = document.createElement('div');
        box.innerText = (c + 1);
        container.appendChild(box).className = 'box';
    }
}

makeGrid(16,16);

