var openBtn = document.querySelector('#open');
var modal = document.querySelector('.modal');
var iconClose = document.querySelector('.modal__header i');
var closeBtn = document.querySelector('#close');

function toggleModal() {
    modal.classList.toggle('hide');
}

openBtn.addEventListener('click', toggleModal);