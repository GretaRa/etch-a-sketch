const controls = document.createElement('div');
controls.classList.add('controls');
document.body.insertBefore(controls, document.body.children[0]);



//Create reset button in HTML
const resetBtn = document.createElement('button');
resetBtn.innerHTML = 'Reset';
resetBtn.classList.add('resetBtn');
controls.appendChild(resetBtn);


//Reset button refreshes grid to draw again
resetBtn.addEventListener('click', () => {
    location.reload();
})

//Container for input form
const form = document.createElement('div');
form.classList.add('form');
controls.appendChild(form);

//Size input
const sizeInput = document.createElement('input');
sizeInput.setAttribute("type", "number");
sizeInput.setAttribute("min", "10");
sizeInput.setAttribute("max", "100");
sizeInput.setAttribute("value", "16");
sizeInput.classList.add('sizeInput');
form.appendChild(sizeInput);


//Submit button 
const submitBtn = document.createElement('input');
submitBtn.setAttribute("type", "submit");
submitBtn.setAttribute('value', 'Submit');
submitBtn.classList.add('submitBtn');
form.appendChild(submitBtn);


//Take size input to adapt grid size
submitBtn.addEventListener('click', () => {
    let rows,cols;
    rows = cols = sizeInput.value;
    if (rows > 100){
        alert('Choose the grid size between 10 and 100')
    } else {
        createCanvas(rows,cols);
    }
});

const container = document.querySelector('.container');

//Create a webpage with a grid of square divs
function createCanvas(rows,cols){
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for(c = 0; c < (rows * cols); c++){
        let box = document.createElement('div');
        box.innerText = ('');
        container.appendChild(box).className = 'box';

        //Change div color when hovered
        box.addEventListener('mouseenter', function (e){
            e.target.style.background = 'coral';
        })
    }
}
createCanvas(16,16);








