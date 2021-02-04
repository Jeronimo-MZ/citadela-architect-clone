let buttonTop = document.querySelector('.back-to');

window.addEventListener('scroll',e => {
    if (window.pageYOffset >= 200){
        buttonTop.style.display = 'flex';
    }else {
        buttonTop.style.display = 'none';

    }
});

// alert(window.pageYOffset)    