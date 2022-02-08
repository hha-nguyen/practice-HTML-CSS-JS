const body = document.querySelector('body');
const range = document.querySelector('.range');
const rangeBar = document.querySelector('.range-bar');
const title = document.querySelector('h1');

function setRangeBar(percent) {
    if (!percent) {
        rangeBar.style.width = `${percent}%`;
        body.style.backgroundColor = `rgba(0, 0, 0, ${percent / 100})`;
        rangeBar.childNodes[1].innerHTML = ``;
    } else {
        rangeBar.style.width = `${percent}%`;
        body.style.backgroundColor = `rgba(0, 0, 0, ${percent / 100})`;
        rangeBar.childNodes[1].innerHTML = `${percent}%`;
    }
}

setRangeBar(40);

document.addEventListener('mousemove', (e) => {
    let percent = Math.ceil((e.pageX - range.offsetLeft) / range.offsetWidth * 100);
    if (percent > 100) {
        setRangeBar(100);
    } else if(percent < 0) {
        setRangeBar(0);
    } else
    setRangeBar(percent);

    if (percent >= 50) {
        title.style.color = `white`;
        rangeBar.childNodes[1].style.color = `white`;
    } else {
        title.style.color = `black`;
        rangeBar.childNodes[1].style.color = `black`;
    }
});

