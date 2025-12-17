/* ========================================
   Theme (Dark Mode) Module
   ======================================== */

const Theme = {
    STORAGE_KEY: 'smartlife_darkmode',
    
    init: function() {
        const themeToggle = document.getElementById('themeToggle');
        if (!themeToggle) return;

        // Check saved preference
        const savedTheme = localStorage.getItem(this.STORAGE_KEY);
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-mode');
            themeToggle.innerHTML = '☀️';
        }

        // Toggle handler
        themeToggle.addEventListener('click', () => this.toggle());
    },

    toggle: function() {
        const themeToggle = document.getElementById('themeToggle');
        const isDark = document.body.classList.toggle('dark-mode');
        
        // Update icon
        themeToggle.innerHTML = isDark ? '☀️' : '🌙';
        
        // Save preference
        localStorage.setItem(this.STORAGE_KEY, isDark ? 'dark' : 'light');
    },

    isDarkMode: function() {
        return document.body.classList.contains('dark-mode');
    }
};

// Export
window.Theme = Theme;
