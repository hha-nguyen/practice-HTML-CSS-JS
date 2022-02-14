var form = document.querySelector('form');
var input = document.querySelector('.form-input input');
var eyes = document.querySelector('.form-eyes');
eyes.addEventListener('click', function (e) {
    eyes.classList.toggle('show');
    if (eyes.classList.contains('show')) {
        input.type = "text";
    }
    else {
        input.type = "password";
    }
});
input.addEventListener('input', function () {
    var value = input.value;
    var lowerCase = document.querySelector('.lower-case');
    var upperCase = document.querySelector('.upper-case');
    var number = document.querySelector('.number');
    var symbol = document.querySelector('.symbol');
    var characters = document.querySelector('.characters');
    value.search(/[a-z]/) >= 0 ? lowerCase.classList.add('valid') : lowerCase.classList.remove('valid');
    value.search(/[A-Z]/) >= 0 ? upperCase.classList.add('valid') : upperCase.classList.remove('valid');
    value.search(/[0-9]/) >= 0 ? number.classList.add('valid') : number.classList.remove('valid');
    value.search(/\W/) >= 0 ? symbol.classList.add('valid') : symbol.classList.remove('valid');
    value.length >= 8 ? characters.classList.add('valid') : characters.classList.remove('valid');
});
