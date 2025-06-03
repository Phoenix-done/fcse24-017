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
        if (!accept) {
            alert('You must accept the Terms & Conditions.');
            e.preventDefault();
            return;
        }
    });
});

