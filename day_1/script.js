const cart = document.getElementsByClassName('card__cart')[0];
const cart_solid = document.createElement('i');
const cart_none = document.getElementsByClassName('card__cart')[0].childNodes[1];
cart_solid.className = "bx bxs-cart-alt";
let cart_solid_choose = false;
let cart_click_count = 0;

console.log(cart);
cart.addEventListener('click', () => {
    console.log(1);
    if (!cart_click_count) {
        cart.replaceChild(cart_solid, cart.firstChild);
        cart.removeChild(cart.childNodes[1]);
        cart_solid_choose = true;
        cart_click_count ++;
    } else {
        if (!cart_solid_choose) {
            cart.replaceChild(cart_solid, cart.firstChild);
            cart_solid_choose = true;
        } else {
            cart.replaceChild(cart_none, cart.firstChild);
            // cart.removeChild(cart.childNodes[1]);
            cart_solid_choose = false;
        }
    }
});

const heart = document.getElementsByClassName('card__heart')[0];
const heart_solid = document.createElement('i');
const heart_none = document.getElementsByClassName('card__heart')[0].childNodes[1];
heart_solid.className = "bx bxs-heart";
let heart_solid_choose = false;
let heart_click_count = 0;

heart.addEventListener('click', () => {
    if (!heart_click_count) {
        heart.replaceChild(heart_solid, heart.firstChild);
        heart.removeChild(heart.childNodes[1]);
        heart_solid_choose = true;
        heart_click_count ++;
    } else {
        if (!heart_solid_choose) {
            heart.replaceChild(heart_solid, heart.firstChild);
            heart_solid_choose = true;
        } else {
            heart.replaceChild(heart_none, heart.firstChild);
            // heart.removeChild(heart.childNodes[1]);
            heart_solid_choose = false;
        }
    } 
});

const img_size = document.getElementsByClassName('card__img')[0].offsetWidth;
const size_6 = document.getElementById('6');
size_6.addEventListener('click', () => {
    document.getElementsByClassName('card__img')[0].style.width = `213px`;
});

const size_7 = document.getElementById('7');
size_7.addEventListener('click', () => {
    document.getElementsByClassName('card__img')[0].style.width = `248px`;
});

const size_8 = document.getElementById('8');
size_8.addEventListener('click', () => {
    document.getElementsByClassName('card__img')[0].style.width = `284px`;
});

const size_9 = document.getElementById('9');
size_9.addEventListener('click', () => {
    document.getElementsByClassName('card__img')[0].style.width = `320px`;
});

const color = document.getElementsByClassName('card__color')[0];
let sneaker = document.getElementsByClassName('card__img')[0];
let green_sneaker = sneaker.childNodes[1];
let color_green = color.childNodes[3];
let color_blue = color.childNodes[5];
let blue_sneaker = document.createElement('img');
let green_click = true;
blue_sneaker.src = "./images/blue_sneaker.png";

color_blue.addEventListener('click', () => {
    if (green_click) {
        document.body.style.background = "linear-gradient(to right, #8eb9ee, #557db4)";
        sneaker.replaceChild(blue_sneaker, green_sneaker);
        document.documentElement.style.setProperty('--primary-color', '#8eb9ee');
        green_click = false;
    } 
});

color_green.addEventListener('click', () => {
    if (!green_click) {
        color_blue = sneaker.childNodes[1];
        document.body.style.background = "linear-gradient(to right, #4daf54, #3d8880)";
        sneaker.replaceChild(green_sneaker, blue_sneaker);
        document.documentElement.style.setProperty('--primary-color', '#4daf54');
        green_click = true;
    }
});











