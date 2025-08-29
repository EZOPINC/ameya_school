// assets/js/script.js

document.addEventListener("DOMContentLoaded", function() {

    // Select all elements with the 'fade-in' class
    const fadeElements = document.querySelectorAll('.fade-in');

    const observerOptions = {
        root: null, // observes intersections relative to the viewport
        rootMargin: '0px',
        threshold: 0.1 // trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // If the element is intersecting (visible)
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Stop observing the element once it's visible
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Start observing each fade-in element
    fadeElements.forEach(element => {
        observer.observe(element);
    });

});