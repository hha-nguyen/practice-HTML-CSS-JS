const search_box = document.querySelector('.search__box');

document.querySelector('.search__button').addEventListener('click', () => {
    search_box.classList.toggle('open');
    // document.querySelector('.search__button').previousElementSibling.focus();
    search_box.childNodes[1].focus();
});