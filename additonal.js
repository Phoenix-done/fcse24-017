document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    form.addEventListener('submit', function (e) {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const message = document.getElementById('message').value.trim();
        const accept = document.getElementById('accept').checked;


        // if loop for making sure all the fields are inputed with info
        if (!name || !email || !phone || !message) {
    alert('Please fill in all fields.');
    e.preventDefault();
    return;
}

// Validate name (no numbers allowed)
const nameRegex = /^[A-Za-z\s]+$/;
if (!nameRegex.test(name)) {
    alert('Name cannot contain numbers.');
    e.preventDefault();
    return;
}

// Validate email format
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(email)) {
    alert('Please enter a valid email address.');
    e.preventDefault();
    return;
}

if (!accept) {
    alert('You must accept the Terms & Conditions.');
    e.preventDefault();
    return;

        }
    });
});

