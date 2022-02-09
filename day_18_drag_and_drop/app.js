const boxes = document.querySelectorAll('.box');
const draggable = document.querySelector('.draggable');

draggable.addEventListener('dragstart', () => {
    draggable.classList.add('dragging');
});

draggable.addEventListener('dragend', () => {
    draggable.classList.remove('dragging');
});

boxes.forEach((box) => {
    box.addEventListener('dragover', (e) => {
        e.preventDefault();
        box.append(draggable);
    });

    box.addEventListener('drop', box.append(draggable));
});

document.addEventListener('dragenter', (e) => {
    if (e.target.className == 'box') {
        e.target.style.border = '3px solid red';
        e.target.style.boxShadow = `0 15px red`;
        console.log(1);
    }
});
document.addEventListener('dragleave', (e) => {
    if (e.target.className == 'box') {
        e.target.style.border = '3px solid black';
        e.target.style.boxShadow = `0 15px black`;
    }
});