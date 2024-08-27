const scrollTopBtn = document.getElementById("scrollTopBtn");
const navbar = document.getElementById("navbar")
window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        scrollTopBtn.style.display = "block";
        navbar.classList.add('navbar-scrolled', 'shadow-lg');
        } else {
        scrollTopBtn.style.display = "none";
        navbar.classList.remove('navbar-scrolled', 'shadow-lg');

        
    }
});

scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

