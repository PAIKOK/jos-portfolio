document.addEventListener("DOMContentLoaded", function () {
    const navToggle = document.getElementById("nav-toggle");
    const navMenu = document.querySelector(".nav__list");

    // Toggle mobile menu
    if (navToggle) {
        navToggle.addEventListener("click", function () {
            navMenu.classList.toggle("show-menu");
        });
    }

    // Smooth scrolling for navbar links
    document.querySelectorAll('.nav__link').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
                // Close mobile menu after clicking a link
                navMenu.classList.remove("show-menu");
            } else {
                console.error("Target section not found:", targetId);
            }
        });
    });

    // Animation observer
    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
});