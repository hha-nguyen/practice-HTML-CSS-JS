var openBtn = document.querySelector('#open');
var modal = document.querySelector('.modal');
var iconClose = document.querySelector('.modal__header i');
var closeBtn = document.querySelector('#close');

function toggleModal(e) {
    modal.classList.toggle('hide');
}

openBtn.addEventListener('click', toggleModal);
iconClose.addEventListener('click', toggleModal);
closeBtn.addEventListener('click', toggleModal);
modal.addEventListener('click', (e) => {
    if (e.target == e.currentTarget) {
        toggleModal();
    }
});
