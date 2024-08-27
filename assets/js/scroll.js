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

  document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const menuLinks = document.querySelectorAll("#mobileMenu a");

    function activateMenuLink() {
      let index = sections.length;

      while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

      menuLinks.forEach((link) => link.classList.remove("active"));
      menuLinks[index].classList.add("active");
    }

    activateMenuLink();
    window.addEventListener("scroll", activateMenuLink);
  });
