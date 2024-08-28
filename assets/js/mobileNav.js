document.addEventListener('DOMContentLoaded', function() {
    const navbarToggle = document.getElementById('navbarToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeMobileMenu = document.getElementById('closeMobileMenu');
    const mobileServicesToggle = document.getElementById('mobileServicesToggle');
    const mobileServicesMenu = document.getElementById('mobileServicesMenu');

    // Toggle mobile menu
    navbarToggle.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu
    closeMobileMenu.addEventListener('click', function() {
        mobileMenu.classList.add('hidden');
    });

    // Toggle Services dropdown in mobile view
    mobileServicesToggle.addEventListener('click', function() {
        mobileServicesMenu.classList.toggle('hidden');
    });
});
