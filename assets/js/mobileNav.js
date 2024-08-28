document.addEventListener('DOMContentLoaded', function() {
    const navbarToggle = document.getElementById('navbarToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeMobileMenu = document.getElementById('closeMobileMenu');
    const mobileServicesToggle = document.getElementById('mobileServicesToggle');
    const mobileServicesMenu = document.getElementById('mobileServicesMenu');
    const mobileNavItems = document.querySelectorAll('.mobile-nav-item');
    
    navbarToggle.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
        document.body.classList.toggle('overflow-hidden');
    });

    closeMobileMenu.addEventListener('click', function() {
        mobileMenu.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
    });

    mobileServicesToggle.addEventListener('click', function() {
        mobileServicesMenu.classList.toggle('hidden');
    });

 
    mobileNavItems.forEach(function(item) {
        item.addEventListener('click', function() {
            if (item !== mobileServicesToggle) {  
                mobileMenu.classList.add('hidden');
                document.body.classList.remove('overflow-hidden');
            }
        });
    });
});
