//Create a webpage with a 16x16 grid of square divs

const container = document.querySelector('.container');

function createCanvas(rows,cols){
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for(c = 0; c < (rows * cols); c++){
        let box = document.createElement('div');
        box.innerText = (c + 1);
        container.appendChild(box).className = 'box';

        //Change div color when hovered
        box.addEventListener('mouseenter', function (e){
            e.target.style.background = 'blue';
        })
    }
}

createCanvas(16,16);







