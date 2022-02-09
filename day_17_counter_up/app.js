const face = document.querySelector('.counter.facebook h3');
const youtube = document.querySelector('.counter.youtube h3');
const tiktok = document.querySelector('.counter.tiktok h3');

function countUp(ele, to) {
    let speed = 200;
    let from = 0;
    let step = to /speed;
    const counter = setInterval(() => {
        from += step;
        if (from < to) {
            ele.innerHTML = `${Math.ceil(from)}`;
        } else {
            clearInterval(counter);
            ele.innerHTML = `${to}`;
        }
    }, 1);
}

countUp(face, 3300);
countUp(youtube, 1000);
countUp(tiktok, 9900);

face.parentElement.addEventListener('click', () => countUp(face, 3300));
youtube.parentElement.addEventListener('click', () => countUp(youtube, 1000));
tiktok.parentElement.addEventListener('click', () => countUp(tiktok, 9900));
