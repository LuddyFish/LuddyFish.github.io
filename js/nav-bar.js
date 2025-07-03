const nav = document.getElementById("nav-bar");
const hamburger = document.getElementById('hamburger');
const sidebar = document.querySelector('.sidebar');
const background = document.getElementById('nav-bg');
let lastScrollY = window.scrollY;

const mobileMaxWidth = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--mobile-max-width'));
const isMobileMedia = window.matchMedia(`(max-width: ${mobileMaxWidth}px)`);

window.addEventListener("scroll", () => {
    if (!isMobileMedia.matches) {
        // If scrolling down
        if (lastScrollY < window.scrollY) {
            nav.classList.add("nav-hidden");
        } else {
            nav.classList.remove("nav-hidden");
        }

        lastScrollY = window.scrollY;
    }
});

isMobileMedia.addEventListener('change', () => {
    nav.classList.remove('nav-hidden');
    sidebar.classList.remove('active');
});

function ToggleSideBar() {
    hamburger.classList.toggle('active');
    sidebar.classList.toggle('active');
    hamburger.innerHTML = hamburger.classList.contains('active') ? "&#10006;" : "&#9776;";
    background.classList.toggle('hidden');
}

hamburger.addEventListener('click', ToggleSideBar);
background.addEventListener('click', ToggleSideBar);