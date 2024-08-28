const scrollTopBtn = document.getElementById("scrollTopBtn");
const navbar = document.getElementById("navbar")
const navbarMenu = document.getElementById("navbarMenu")
window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        scrollTopBtn.style.display = "block";
        navbar.classList.add('navbar-scrolled', 'shadow-lg');
        // navbarMenu.classList.add("text-primary2")
        } else {
        scrollTopBtn.style.display = "none";
        navbar.classList.remove('navbar-scrolled', 'shadow-lg');
        // navbarMenu.classList.remove("text-primary2")


        
    }
});

scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

