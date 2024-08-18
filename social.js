document.addEventListener('DOMContentLoaded', function () {

    // Smooth Scroll for Navigation
    document.querySelectorAll('.navbar a').forEach(anchor => {
        anchor.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').split('.')[0];
            const targetSection = document.querySelector(`#${targetId}`);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Copy Email to Clipboard
    const copyEmailButton = document.querySelector('.copy-email');
    copyEmailButton.addEventListener('click', function () {
        const email = "mukherjeepratyusha23@gmail.com";
        navigator.clipboard.writeText(email).then(() => {
            alert("Email copied to clipboard!");
        }).catch(err => {
            alert("Failed to copy email.");
            console.error("Error copying email: ", err);
        });
    });

    // Dynamic Animations for Social Icons
    const socialIcons = document.querySelectorAll('.social-icons a i');
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseover', function () {
            icon.style.color = '#4CAF50';
            icon.style.transform = 'scale(1.2)';
            icon.style.transition = 'transform 0.3s ease, color 0.3s ease';
        });

        icon.addEventListener('mouseout', function () {
            icon.style.color = '';
            icon.style.transform = 'scale(1)';
        });
    });

    // Button Hover Effect
    const buttons = document.querySelectorAll('.actions button, .hire-me');
    buttons.forEach(button => {
        button.addEventListener('mouseover', function () {
            button.style.backgroundColor = '#4CAF50';
            button.style.color = '#fff';
            button.style.transition = 'background-color 0.3s ease, color 0.3s ease';
        });

        button.addEventListener('mouseout', function () {
            button.style.backgroundColor = '';
            button.style.color = '';
        });
    });

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