const barraNav = document.querySelector('.navegacion');
const btnBurger = document.querySelector('.header__btn-toggle');
const body = document.querySelector('body');

btnBurger.addEventListener('click', () => {
    const visibilidad = barraNav.getAttribute('data-visible');

    // console.log(visibilidad);

    if(visibilidad === "false") {
        barraNav.setAttribute('data-visible', true);
        btnBurger.setAttribute('aria-expanded', true);
        body.setAttribute('data-noScroll', true);
    } else {
        barraNav.setAttribute('data-visible', false);
        btnBurger.setAttribute('aria-expanded', false);
        body.setAttribute('data-noScroll', false);
    }
})