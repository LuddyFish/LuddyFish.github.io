const root = document.documentElement;

function toggleTheme() {
    const currentTheme = root.getAttribute('data-bs-theme') || 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-bs-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateButtons(newTheme);
}

function updateButtons(theme) {
    const toggle = document.querySelector('.toggle-container');
    const light = toggle.querySelectorAll('.fa-toggle-off, .fa-sun');
    const dark = toggle.querySelectorAll('.fa-toggle-on, .fa-moon');
    if (theme === 'dark') {
        light.forEach(l => l.classList.add('d-none'));
        dark.forEach(d => d.classList.remove('d-none'));
    } else {
        light.forEach(l => l.classList.remove('d-none'));
        dark.forEach(d => d.classList.add('d-none'));
    }
}

function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    root.setAttribute('data-bs-theme', savedTheme);
    updateButtons(savedTheme);
}

document.addEventListener('DOMContentLoaded', initTheme);