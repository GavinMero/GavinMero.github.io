const header = document.querySelector("header");
const scrollThreshold = 50;

window.addEventListener("scroll", function() {
    if (window.scrollY > scrollThreshold) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});


/*-----------------------------------*/
/* MOBILE NAV TOGGLE */
/*-----------------------------------*/

const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("nav");

if (navToggle && nav) {
    navToggle.addEventListener("click", function() {
        const isOpen = nav.classList.toggle("open");
        navToggle.textContent = isOpen ? "✕" : "☰";
    });
}