// interactivity menu
let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar")

menu.onclick = () => {
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
}

// Delete selection of menu
// Scrollspy 
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');
window.onscroll = () => {

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    section.forEach(sec => {

        let top = window.scrollY;
        let height = sec.offsetHeight;
        let offset = sec.offsetTop - 150;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header .navbar a[href*=' + id + ']').classList.add('active');
            });
        };

    });

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

// loader
function loader(){
    document.querySelector(".loader__container").classList.add("fade__out");
}

function fadeOut(){
    setInterval(loader, 3000);
}

window.onload = fadeOut;



