document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contactForm');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Oops, looks like this form is having issues. Please email me at hello@dari.dev. Thanks for connecting!');
        
        // Contact Form Incomplete
        // contactForm.submit();
    });
});