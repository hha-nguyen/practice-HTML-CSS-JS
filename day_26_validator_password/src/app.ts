const form: HTMLFormElement = document.querySelector('form');
const input: HTMLInputElement = document.querySelector('.form-input input');
const eyes: HTMLSpanElement = document.querySelector('.form-eyes');

eyes.addEventListener('click', (e: MouseEvent) => {
    eyes.classList.toggle('show');

    if (eyes.classList.contains('show')) {
        input.type = "text";
    } else {
        input.type = "password";
    }
});

input.addEventListener('input', () => {
    const value = input.value;

    const lowerCase: HTMLParagraphElement = document.querySelector('.lower-case');
    const upperCase: HTMLParagraphElement = document.querySelector('.upper-case');
    const number: HTMLParagraphElement = document.querySelector('.number');
    const symbol: HTMLParagraphElement = document.querySelector('.symbol');
    const characters: HTMLParagraphElement = document.querySelector('.characters');

    value.search(/[a-z]/) >= 0 ? lowerCase.classList.add('valid') : lowerCase.classList.remove('valid');
    value.search(/[A-Z]/) >= 0 ? upperCase.classList.add('valid') : upperCase.classList.remove('valid');
    value.search(/[0-9]/) >= 0 ? number.classList.add('valid') : number.classList.remove('valid');
    value.search(/\W/) >= 0 ? symbol.classList.add('valid') : symbol.classList.remove('valid');
    value.length >= 8 ? characters.classList.add('valid') : characters.classList.remove('valid');
});