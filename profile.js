document.addEventListener('DOMContentLoaded', function () {


    const greetingElement = document.querySelector('.profile h1');
    const currentHour = new Date().getHours();
    let greetingMessage;

    if (currentHour >= 5 && currentHour < 12) {
        greetingMessage = "Good Morning, It's me Pratyusha";
    } else if (currentHour >= 12 && currentHour < 18) {
        greetingMessage = "Good Afternoon, It's me Pratyusha";
    } else if(currentHour >= 18 && currentHour < 20){
        greetingMessage = "Good Evening, It's me Pratyusha";
    }else{
        greetingMessage = "Good Night, It's me Pratyusha";
    }
    
    greetingElement.textContent = greetingMessage;

    
    const achievementSections = document.querySelectorAll('.section');
    achievementSections.forEach(section => {
        const heading = section.querySelector('h3');
        const paragraph = section.querySelector('p');
        paragraph.style.display = 'none'; 

        heading.addEventListener('click', function () {
            const isExpanded = paragraph.style.display === 'block';
            paragraph.style.display = isExpanded ? 'none' : 'block';
            heading.classList.toggle('expanded', !isExpanded);
        });
    });

    
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