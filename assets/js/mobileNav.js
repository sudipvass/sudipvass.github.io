const navbarToggle = document.getElementById("navbarToggle");
const mobileMenu = document.getElementById("mobileMenu");
const closeMobileMenu = document.getElementById("closeMobileMenu");

navbarToggle.addEventListener("click", () => {
    mobileMenu.classList.remove("hidden");
});

closeMobileMenu.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
});

// Hide mobile menu on link click
mobileMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
    });
});