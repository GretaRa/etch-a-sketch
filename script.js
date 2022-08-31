//TODO
//Draw only when holding mouse key
//Change colors
//Make a slider for size
//Add a title
//Style it

//Create a container for controls
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

//container for rows input
const containerRows = document.createElement('div');
containerRows.classList.add('containerRows');
form.appendChild(containerRows);

//Text rows input
const textRows = document.createElement('p');
textRows.textContent = 'Rows';
containerRows.appendChild(textRows);

//Size input rows
const sizeRows = document.createElement('input');
sizeRows.setAttribute("type", "number");
sizeRows.setAttribute("min", "2");
sizeRows.setAttribute("max", "100");
sizeRows.setAttribute("value", "16");
sizeRows.classList.add('sizeRows');
containerRows.appendChild(sizeRows);

//Add x
const text = document.createElement('p');
text.textContent = 'X';
form.appendChild(text);

//container for cols input
const containerCols = document.createElement('div');
containerCols.classList.add('containerCols');
form.appendChild(containerCols);

//Text cols input
const textCols = document.createElement('p');
textCols.textContent = 'Columns';
containerCols.appendChild(textCols);

//Size input cols
const sizeCols = document.createElement('input');
sizeCols.setAttribute("type", "number");
sizeCols.setAttribute("min", "2");
sizeCols.setAttribute("max", "100");
sizeCols.setAttribute("value", "16");
sizeCols.classList.add('sizeCols');
containerCols.appendChild(sizeCols);


//Submit button 
const submitBtn = document.createElement('input');
submitBtn.setAttribute("type", "submit");
submitBtn.setAttribute('value', 'Submit');
submitBtn.classList.add('submitBtn');
form.appendChild(submitBtn);


//Consider size input to adapt grid size
submitBtn.addEventListener('click', () => {
    let rows = sizeRows.value;
    let cols = sizeCols.value;
    if (rows > 100 || cols >100 || rows < 2 || cols < 2){
        alert('Choose between 2 and 100 number of rows and colums');
    } else {
        createCanvas(rows,cols);
    }
});

//Recoginse container for the grid
const container = document.querySelector('.container');


let mouseDown = false;
document.body.onmousedown = function() {
mouseDown = true;
};
document.body.onmouseup = function() {
mouseDown = false;
};

//Create a webpage with a grid of square divs
function createCanvas(rows,cols){
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for(c = 0; c < (rows * cols); c++){
        let box = document.createElement('div');
        box.innerText = ('');
        container.appendChild(box).className = 'box';

        //Change div color when pressed and hold
        box.addEventListener('mouseover', changeColor);
        box.addEventListener('mousedown', changeColor);
    }
}

//Default grid
createCanvas(16,16);


function changeColor(e) {
    if (mouseDown) {
      let color1 = Math.floor(Math.random() * 256);
      let color2 = Math.floor(Math.random() * 256);
      let color3 = Math.floor(Math.random() * 256);
  
      e.target.style.backgroundColor = `rgb(${color1},${color2},${color3})`;
    }
  }







