var container = document.querySelector('.container');
var SQUARE = 200;
var setBackGroundColor = function () {
    var color = '#';
    var HEX = '0123456789ABCDEF';
    for (var i = 0; i < 6; ++i) {
        var randomNum = HEX[Math.floor(Math.random() * 16)];
        color += randomNum;
    }
    return color;
};
var setColor = function (element) {
    var color = setBackGroundColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = "0 0 10px ".concat(color, ", 0 0 100px ").concat(color);
};
var _loop_1 = function (i) {
    var square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mouseover', function () {
        setColor(square);
    });
    square.addEventListener('mouseleave', function () {
        square.style.backgroundColor = '#1d1d1d';
        square.style.boxShadow = '0 0 2px #000';
    });
    container.appendChild(square);
};
for (var i = 0; i < SQUARE; ++i) {
    _loop_1(i);
}
