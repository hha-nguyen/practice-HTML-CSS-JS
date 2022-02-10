const imputToggle = document.querySelector('#toggleMode');

imputToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark');
});