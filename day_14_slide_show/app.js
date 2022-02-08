const main_img = document.querySelector('.img-wrap img'); 
const control_prev = document.querySelector('.prev');
const control_next = document.querySelector('.next');
const listDivImg = document.querySelectorAll('.list-img div');

let current_index = 0;

control_prev.addEventListener('click', () => {
    removeTargetColor(current_index);
    if (current_index) {
        main_img.src = listDivImg[current_index-1].querySelector('img').src;
        current_index--;
    } else { 
        main_img.src = listDivImg[listDivImg.length-1].querySelector('img').src;
        current_index = listDivImg.length-1;
    }
    setTargetColor(current_index);
});

control_next.addEventListener('click', () => {
    removeTargetColor(current_index);
    if (current_index != listDivImg.length-1) {
        main_img.src = listDivImg[current_index+1].querySelector('img').src;
        current_index++;
    } else { 
        main_img.src = listDivImg[0].querySelector('img').src;
        current_index = 0;
    }
    setTargetColor(current_index);

});

listDivImg.forEach((div, index) => {
    div.querySelector('img').addEventListener('click', () => {
        main_img.src = div.querySelector('img').src;
        removeTargetColor(current_index);
        current_index = index;
        setTargetColor(current_index);
    });
});

function setTargetColor(index) {
    listDivImg[index].classList.add('active');
}
function removeTargetColor(index) {
    listDivImg[index].classList.remove('active');
}