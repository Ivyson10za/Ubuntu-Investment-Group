// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Fade-in animation on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

document.querySelectorAll('.card, .phone, .feature').forEach(el => {
    el.classList.add('hidden');
    observer.observe(el);
});

// Display current year in the footer
const footer = document.querySelector("footer p");
if (footer) {
    footer.innerHTML = `© ${new Date().getFullYear()} Ubuntu Investment Group`;
}
