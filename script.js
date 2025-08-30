// --- AOS SCROLL ANIMATION ---
AOS.init({
    duration: 800,
    once: true,
    offset: 50,
});

// --- FIXED HAMBURGER MENU LOGIC ---
const hamburger = document.querySelector('.hamburger');
const mobileNavOverlay = document.querySelector('.mobile-nav-overlay');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-active');
    mobileNavOverlay.classList.toggle('is-active');
});

// Close menu when a link is clicked
const mobileLinks = document.querySelectorAll('.mobile-link');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('is-active');
        mobileNavOverlay.classList.remove('is-active');
    });
});

// --- STATS COUNTER ANIMATION ---
const statNumbers = document.querySelectorAll('.stat-number');
const statsSection = document.querySelector('.stats-section');

const startCounter = (entry) => {
    if (entry.isIntersecting) {
        statNumbers.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const speed = 200; // Lower is faster
            
            const updateCount = () => {
                const count = +counter.innerText;
                const increment = target / speed;

                if (count < target) {
                    counter.innerText = Math.ceil(count + increment);
                    setTimeout(updateCount, 15);
                } else {
                    counter.innerText = target.toLocaleString() + (counter.getAttribute('data-target') === '600' ? '+' : '');
                }
            };
            updateCount();
        });
        // Stop observing once animation has run
        observer.unobserve(statsSection);
    }
};

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => startCounter(entry));
}, {
    threshold: 0.5 // Trigger when 50% of the section is visible
});

observer.observe(statsSection);


// --- PARTICLES.JS CONFIG ---
particlesJS('particles-js', {
    "particles": { "number": {"value": 60, "density": {"enable": true, "value_area": 800}}, "color": {"value": "#ffffff"}, "shape": {"type": "circle"}, "opacity": {"value": 0.3, "random": true, "anim": {"enable": true, "speed": 1, "opacity_min": 0.1}}, "size": {"value": 3, "random": true}, "line_linked": {"enable": true, "distance": 150, "color": "#ff1a4f", "opacity": 0.2, "width": 1}, "move": {"enable": true, "speed": 2, "direction": "none", "out_mode": "out"} },
    "interactivity": { "events": {"onhover": {"enable": true, "mode": "grab"}, "onclick": {"enable": true, "mode": "push"}}, "modes": { "grab": {"distance": 140, "line_linked": {"opacity": 0.5}}, "push": {"particles_nb": 4} } },
    "retina_detect": true
});
