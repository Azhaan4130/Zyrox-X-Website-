// --- AOS SCROLL ANIMATION ---
AOS.init({
    duration: 1000,
    once: true,
    offset: 50,
});

// --- GLOWING CURSOR EFFECT ---
document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.glow-cursor');
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // Add hover effects for interactive elements
    const hoverElements = document.querySelectorAll('a, .feature-card');
    hoverElements.forEach(el => {
        el.addEventListener('mouseover', () => {
            cursor.style.width = '50px';
            cursor.style.height = '50px';
            cursor.style.borderWidth = '1px';
        });
        el.addEventListener('mouseout', () => {
            cursor.style.width = '30px';
            cursor.style.height = '30px';
            cursor.style.borderWidth = '3px';
        });
    });
});
