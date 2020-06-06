// window.addEventListener("scroll")
"use strict";

const headerNavBar = document.getElementById(`headerNavBar`);
const headerBurger = document.getElementById(`headerBurger`);
const formPopup = document.getElementById(`formPopup`);
const themeButton = document.getElementById(`themeButton`);

themeButton.onclick = function () {
    document.documentElement.classList.toggle('light');
    document.documentElement.classList.toggle('dark');
};

window.onscroll = function () {
    if (window.pageYOffset > skills.offsetTop - (window.innerHeight / 2)) {
        progressBar90.classList.add('percentage90');
    }
    if (window.pageYOffset > skills.offsetTop - (window.innerHeight / 2)) {
        progressBar72.classList.add('percentage72');
    }
    if (window.pageYOffset > skills.offsetTop - (window.innerHeight / 2)) {
        progressBar60.classList.add('percentage60');
    }
    if (window.pageYOffset > skills.offsetTop - (window.innerHeight / 2)) {
        progressBar84.classList.add('percentage84');
    }
    if (window.pageYOffset > skills.offsetTop - (window.innerHeight / 2)) {
        progressBarExt90.classList.add('percentage90');
    }
    if (window.pageYOffset > skills.offsetTop - (window.innerHeight / 2)) {
        progressBarExt72.classList.add('percentage72');
    }
    if (window.pageYOffset > skills.offsetTop - (window.innerHeight / 2)) {
        progressBarExt60.classList.add('percentage60');
    }
    if (window.pageYOffset > skills.offsetTop - (window.innerHeight / 2)) {
        progressBarExt84.classList.add('percentage84');
    }
};


function formPopupBtnShow() {
    document.body.classList.add('no-scroll');
    formPopup.classList.add('show');
}

function formPopupBtnClose() {
    document.body.classList.remove('no-scroll');
    formPopup.classList.remove('show');
}

function collapse(burger, navbar) {
    return function () {
        burger.classList.toggle('active');
        navbar.classList.toggle('active');
        document.body.classList.toggle('menu-no-scroll');
    }
}

headerBurger.onclick = collapse(headerBurger, headerNavBar);
headerNavBar.onclick = collapse(headerBurger, headerNavBar);

//slick-slider-settings jQuery

$('.slider').slick({
    slidesToShow: 1,
    infinite: true,
    dots: true,
    arrows: false,
});