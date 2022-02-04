const images = document.querySelectorAll('.image');
const gallery = document.querySelector('.gallery');
const closeGallery= document.querySelector('#close');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let currentImage;

gallery.classList.remove('show');
images.forEach((img, index) => {
    img.addEventListener('click', () => {
        currentImage = index+1;
        currentImage == 1 ? prev.classList.remove('show') : prev.classList.add('show');
        currentImage == images.length ? next.classList.remove('show') : next.classList.add('show');
        gallery.classList.add('show');
        document.querySelector('.img-inner').src = `./images/img${currentImage}.jpeg`;
    });
});

prev.addEventListener('click', () => {
    currentImage--;
    document.querySelector('.img-inner').src = `./images/img${currentImage}.jpeg`;
    currentImage == 1 ? prev.classList.remove('show') : prev.classList.add('show');
    currentImage == images.length ? next.classList.remove('show') : next.classList.add('show');
});
next.addEventListener('click', () => {
    currentImage++;
    document.querySelector('.img-inner').src = `./images/img${currentImage}.jpeg`;
    currentImage == 1 ? prev.classList.remove('show') : prev.classList.add('show');
    currentImage == images.length ? next.classList.remove('show') : next.classList.add('show');
});

closeGallery.addEventListener('click', hide);
function hide() {
    gallery.classList.remove('show');
}


