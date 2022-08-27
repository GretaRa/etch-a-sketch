//Create reset button in HTML
const resetBtn = document.createElement('button');
resetBtn.innerHTML = 'Reset';
document.body.insertBefore(resetBtn, document.body.children[0]).className = 'resetBtn';

resetBtn.addEventListener('click', () => {
    let rows = Number(prompt('Please choose canvas width between 1 and 100 squares', 16));
    let cols = Number(prompt('Please choose canvas height between 1 and 100 squares', 16));

    if (cols > 100 || cols < 1 || rows > 100 || rows < 1){
        alert('Choose a number between 1 and 100');
        return
    } else {
        location.reload();
        createCanvas(rows, cols);
    }
})

const container = document.querySelector('.container');

//Create a webpage with a 16x16 grid of square divs
function createCanvas(rows,cols){
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for(c = 0; c < (rows * cols); c++){
        let box = document.createElement('div');
        box.innerText = ('');
        container.appendChild(box).className = 'box';

        //Change div color when hovered
        box.addEventListener('mouseenter', function (e){
            e.target.style.background = 'blue';
        })
    }
}
createCanvas(16,16);








