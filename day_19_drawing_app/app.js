const canvas = document.querySelector('canvas');
const colorEl = document.querySelector('input');
const eraser = document.querySelector('.eraser');
const decrease = document.querySelector('.decrease');
const increase = document.querySelector('.increase');
const sizeEl = document.querySelector('.size');
const save = document.querySelector('.save');
const clear = document.querySelector('.clear');

const context = canvas.getContext('2d');

let size = 10;
colorEl.value = '#000000';
let color = colorEl.value;
let x, y;
let isPressed = false;

document.addEventListener('mousedown', (e) => {
    isPressed = true;
    
    x = e.offsetX;
    y = e.offsetY;
});

document.addEventListener('mouseup', (e) => {
    isPressed = false;

    x = undefined;
    y = undefined;
});

document.addEventListener('mousemove', (e) => {
    if(isPressed) {
        x2 = e.offsetX;
        y2 = e.offsetY;

        drawCircle(x2, y2);
        drawPath(x, y, x2, y2);

        x = x2;
        y = y2;
    }
});

function drawCircle(x, y) {
    context.beginPath();
    context.arc(x, y, size, 0, Math.PI * 2);
    context.fillStyle = colorEl.value;
    context.fill();
}

function drawPath(x, y, x2, y2) {
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x2, y2);
    context.strokeStyle = colorEl.value;
    context.lineWidth = size * 2;
    context.stroke();
}

function updateSizeOnScreen() {
    sizeEl.innerText = size;
}

decrease.addEventListener('click', () => {
    size -= 5;
    if (size < 5) {
        size = 5;
    } 
    updateSizeOnScreen();
});

increase.addEventListener('click', () => {
    size += 5;
    if (size > 50) {
        size = 50;
    } 
    updateSizeOnScreen();
});

eraser.addEventListener('click', () => {
   color = '#fff'; 
});

clear.addEventListener('click', () => {
    context.clearRect(0, 0, canvas.width, canvas.height);

    const a = document.querySelector('a');
    a.style.color = 'unset';

    colorEl.value = '#000000';
})

save.addEventListener('click', (e) => {
    const imgURL = canvas.toDataURL('image/png');
    e.currentTarget.href = imgURL;
});

