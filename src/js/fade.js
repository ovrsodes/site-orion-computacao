document.addEventListener('DOMContentLoaded', () => {

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-visible');
                observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.15 
    });

    document.querySelectorAll('.fade-hidden').forEach(el => {
        observer.observe(el);
    });

});