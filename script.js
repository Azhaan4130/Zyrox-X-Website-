// --- AOS SCROLL ANIMATION ---
AOS.init({
    duration: 800,
    once: true,
    offset: 50,
});

// --- HAMBURGER MENU LOGIC ---
const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-active');
    mobileNav.classList.toggle('is-active');
});

// Close menu when a link is clicked
const mobileLinks = document.querySelectorAll('.mobile-link');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('is-active');
        mobileNav.classList.remove('is-active');
    });
});

// --- PARTICLES.JS CONFIG ---
particlesJS('particles-js', {
    "particles": { "number": {"value": 60, "density": {"enable": true, "value_area": 800}}, "color": {"value": "#ffffff"}, "shape": {"type": "circle"}, "opacity": {"value": 0.3, "random": true, "anim": {"enable": true, "speed": 1, "opacity_min": 0.1}}, "size": {"value": 3, "random": true}, "line_linked": {"enable": true, "distance": 150, "color": "#ff1a4f", "opacity": 0.2, "width": 1}, "move": {"enable": true, "speed": 2, "direction": "none", "out_mode": "out"} },
    "interactivity": { "events": {"onhover": {"enable": true, "mode": "grab"}, "onclick": {"enable": true, "mode": "push"}}, "modes": { "grab": {"distance": 140, "line_linked": {"opacity": 0.5}}, "push": {"particles_nb": 4} } },
    "retina_detect": true
});
