const cart = document.getElementsByClassName('card__cart')[0];
const cart_solid = document.createElement('i');
const cart_none = document.getElementsByClassName('card__cart')[0].childNodes[1];
cart_solid.className = "bx bxs-cart-alt";
let cart_solid_choose = false;
let cart_click_count = 0;

console.log(cart);
cart.addEventListener('click', () => {
    console.log(1);
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





