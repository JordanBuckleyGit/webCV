document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");

    // Scroll animations
    const options = {
        root: null,
        threshold: 0.1,
        rootMargin: "0px"
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });
});
