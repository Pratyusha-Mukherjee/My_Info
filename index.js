document.addEventListener('DOMContentLoaded', function () {
    // Smooth Scroll to Profile Section
    document.querySelector('.hire-me').addEventListener('click', function (event) {
        event.preventDefault();
        document.querySelector('.profile').scrollIntoView({ behavior: 'smooth' });
    });

    // Copy Email to Clipboard
    document.querySelector('.copy-email-btn').addEventListener('click', function () {
        const email = "mukherjeepratyusha23@gmail.com";
        navigator.clipboard.writeText(email).then(() => {
            showAlert("Email copied to clipboard!");
        }).catch(err => {
            console.error('Failed to copy email: ', err);
        });
    });

    // Show Alert Function
    function showAlert(message) {
        const alertBox = document.createElement('div');
        alertBox.className = 'alert-box';
        alertBox.textContent = message;
        document.body.appendChild(alertBox);

        setTimeout(() => {
            alertBox.remove();
        }, 3000);
    }
});
document.addEventListener('DOMContentLoaded', function() {
    document.body.classList.add('loaded');
});

document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetUrl = this.getAttribute('href');
        document.body.classList.remove('loaded');
        setTimeout(() => {
            window.location.href = targetUrl;
        }, 1000); // Duration of fade-out effect
    });
});

