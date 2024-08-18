document.addEventListener('DOMContentLoaded', function () {

    
    const projectItems = document.querySelectorAll('.rectangle');
    const searchInput = document.createElement('input');
    searchInput.setAttribute('type', 'text');
    searchInput.setAttribute('placeholder', 'Search projects...');
    searchInput.className = 'search-input';
    document.querySelector('.projectsname').appendChild(searchInput);

    searchInput.addEventListener('input', function () {
        const searchTerm = searchInput.value.toLowerCase();
        projectItems.forEach(item => {
            const projectName = item.querySelector('h4').textContent.toLowerCase();
            if (projectName.includes(searchTerm)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });


    document.querySelector('.hire-me').addEventListener('click', function (event) {
        event.preventDefault();
        document.querySelector('.section2').scrollIntoView({ behavior: 'smooth' });
        showAlert("Redirecting to Hire Me form...");
    });

    
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
        }, 1000); 
    });
});