function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('collapsed');
}
document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('theme-toggle');

    // Check local storage for saved theme preference
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        document.body.classList.toggle('dark-theme', currentTheme === 'dark');
        document.querySelector('.header').classList.toggle('dark-theme', currentTheme === 'dark');
        document.querySelector('.footer').classList.toggle('dark-theme', currentTheme === 'dark');
        themeToggle.innerHTML = currentTheme === 'dark' ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
    }

    themeToggle.addEventListener('click', function () {
        document.body.classList.toggle('dark-theme');
        document.querySelector('.header').classList.toggle('dark-theme');
        document.querySelector('.footer').classList.toggle('dark-theme');
        
        // Save the current theme to local storage
        const newTheme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
        localStorage.setItem('theme', newTheme);
        themeToggle.innerHTML = newTheme === 'dark' ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
    });
});
