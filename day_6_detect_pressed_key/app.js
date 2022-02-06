const box_alert = document.querySelector('.alert');
const box = document.querySelector('.box');
const box_result = document.querySelector('.box__result');
const key_value = document.querySelector('.key .card__value');
const location_value = document.querySelector('.location .card__value');
const which_value = document.querySelector('.which .card__value');
const code_value = document.querySelector('.code .card__value');

box_alert.classList.remove('hide');
document.addEventListener('keydown', (e) => {
    box_alert.classList.add('hide');
    box.classList.remove('hide');

    box_result.innerText = e.which;
    key_value.innerText = e.keyCode === 32 ? 'Space' : e.key;
    location_value.innerText = e.location;
    which_value.innerText = e.which;
    code_value.innerText = e.code;
});

