const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
   button.addEventListener('click', (e) => {
      createToasts(e.target.getAttribute('class')); 
   }); 
});

const toasts = {
    success: {
        icon: `<i class="far fa-check-circle"></i>`,
        messeage: `This is a success messeage !`
    },
    warning: {
        icon: `<i class="fas fa-exclamation-circle"></i>`,
        messeage: `This is a warning messeage !`
    },
    error: {
        icon: `<i class="fas fa-exclamation-triangle"></i>`,
        messeage: `This is a error messeage !`
    }
}
function createToasts(status) {
    let toast = document.createElement('div');

    toast.innerHTML = `
        ${toasts[status].icon}
        <span class="messeage">${toasts[status].messeage}</span>
        <span class="countdown"></span>
    `;
    toast.className = `toast ${status}`;

    document.querySelector('#toasts').appendChild(toast);

    setTimeout(() => {
        toast.style.animation = `hide_slide 1s ease forward`;
    }, 4000);
    setTimeout(() => {
       toast.remove(); 
    }, 6000);
}