const foodBtns = document.querySelectorAll('.food-menu button');
const foodList = document.querySelectorAll('.food-item');

foodBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        let type = e.target.getAttribute('type-food');
        
        document.querySelector('.food-menu .active').classList.remove('active');
        e.target.classList.add('active');

        foodList.forEach((food) => {
            let type_food = food.getAttribute('type-food');
            if (type == 'all' || type == type_food) {
                food.classList.remove('hide');
            } else food.classList.add('hide');
        });
    });

    btn.addEventListener('mousedown', (e) => {
        e.target.classList.add('choose');
    });
    // btn.addEventListener('mouseup', (e) => {
    //     e.target.classList.remove('choose');
    // });
    btn.addEventListener('mousemove', (e) => {
        e.target.classList.remove('choose');
    });
});