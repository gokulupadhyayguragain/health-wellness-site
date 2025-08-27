document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('darkmode');

    // Check if dark mode is enabled in local storage
    if (localStorage.getItem('darkmode') === 'enabled') {
        document.body.classList.add('darkmode');
        document.querySelector('nav').classList.add('dark-mode');
    }

    toggleButton.addEventListener('click', function() {
        document.body.classList.toggle('darkmode');
        document.querySelector('nav').classList.toggle('darkmode');

        // Save the current state to local storage
        if (document.body.classList.contains('darkmode')) {
            localStorage.setItem('darkmode', 'enabled');
        } else {
            localStorage.setItem('darkmode', 'disabled');
        }
    });
});
