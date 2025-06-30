const nav = document.getElementById("nav-bar");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
    // If scrolling down
    if (lastScrollY < window.scrollY) {
        nav.classList.add("nav-hidden");
    } else {
        nav.classList.remove("nav-hidden");
    }

    lastScrollY = window.scrollY;
});