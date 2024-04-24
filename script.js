document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.querySelector('.contact form');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.querySelector('input[name="name"]');
        const email = document.querySelector('input[name="email"]');
        const message = document.querySelector('textarea[name="message"]');

        if (name.value && email.value && message.value) {
            alert(`Name: ${name.value}\nEmail: ${email.value}\nMessage: ${message.value}`);
        } else {
            alert('Please fill in all fields.');
        }
    });
});
