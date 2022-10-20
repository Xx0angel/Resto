// interactivity menu
let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar")

menu.onclick = () => {
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
}

// Delete selection of menu
menu.onscroll = () => {
    menu.classList.remove("fa-times");
    navbar.classList.remove("active");
}

// Interactivity of form search 
document.querySelector("#search-icon").onclick = () => {
    document.querySelector("#search").classList.toggle("active");
}
// Close form search
document.querySelector(".close__form").onclick = () => {
    document.querySelector("#search").classList.toggle("active");
}

// Initialize the swipper

var swiper = new Swiper(".home__slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        }, 
        1024: {
            slidesPerView: 3,
        },
    },   
});




