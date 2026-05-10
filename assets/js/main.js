// Initialize Lucide icons
document.addEventListener('DOMContentLoaded', () => {
    if (window.lucide) {
        window.lucide.createIcons();
    }

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('[data-animate]').forEach(el => {
        observer.observe(el);
    });

    // Mobile menu toggle (simple version)
    const logo = document.querySelector('.logo');
    logo.addEventListener('click', (e) => {
        // Just a fun interaction for now
        console.log('Navigating to homepage...');
    });
});
