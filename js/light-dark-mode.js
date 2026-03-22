const root = document.documentElement;

function toggleTheme() {
    const currentTheme = root.getAttribute('data-bs-theme') || 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-bs-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateButtons(newTheme);
}

function updateButtons(theme) {
    const sunBtn = document.getElementById('light-mode-btn');
    const moonBtn = document.getElementById('dark-mode-btn');
    if (theme === 'dark') {
        sunBtn.classList.add('d-none');
        moonBtn.classList.remove('d-none');
    } else {
        sunBtn.classList.remove('d-none');
        moonBtn.classList.add('d-none');
    }
}

function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    root.setAttribute('data-bs-theme', savedTheme);
    updateButtons(savedTheme);
}

document.addEventListener('DOMContentLoaded', initTheme);