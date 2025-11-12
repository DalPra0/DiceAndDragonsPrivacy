// Language switcher functionality
function showLanguage(lang) {
    // Hide all content divs
    document.querySelectorAll('.content').forEach(content => {
        content.classList.remove('active');
    });

    // Remove active class from all buttons
    document.querySelectorAll('.language-selector button').forEach(btn => {
        btn.classList.remove('active');
    });

    // Show selected language content
    document.getElementById(`content-${lang}`).classList.add('active');
    document.getElementById(`btn-${lang}`).classList.add('active');

    // Save preference to localStorage
    localStorage.setItem('preferredLanguage', lang);
}

// Detect user's preferred language on page load
window.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('preferredLanguage');
    const browserLanguage = navigator.language.toLowerCase();
    
    let defaultLanguage = 'en';
    
    if (savedLanguage) {
        defaultLanguage = savedLanguage;
    } else if (browserLanguage.startsWith('pt')) {
        defaultLanguage = 'pt';
    }
    
    showLanguage(defaultLanguage);
});

// Add smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(section);
});
