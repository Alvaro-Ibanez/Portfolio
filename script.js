document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('#navbar a');

    for (const link of links) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const section = document.querySelector(this.getAttribute('href'));
            window.scrollTo({
                top: section.offsetTop - document.querySelector('#navbar').offsetHeight,
                behavior: 'smooth'
            });
        });
    }
});