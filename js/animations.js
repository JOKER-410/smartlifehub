/* ========================================
   Animations & UI Effects Module
   ======================================== */

const Animations = {
    init: function() {
        this.initLoader();
        this.initScrollAnimations();
        this.initCounters();
        this.initTabs();
        this.initAccordion();
        this.initVisitorCounter();
    },

    initLoader: function() {
        const loader = document.querySelector('.loader');
        if (!loader) return;

        window.addEventListener('load', () => {
            setTimeout(() => {
                loader.classList.add('hidden');
            }, 500);
        });
    },

    initScrollAnimations: function() {
        const animateElements = document.querySelectorAll('.card, .service-card, .news-card, .team-card');
        
        if (!animateElements.length) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });

        animateElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'all 0.6s ease';
            observer.observe(el);
        });
    },

    initCounters: function() {
        const counters = document.querySelectorAll('.stat-number, .stat-value');
        
        if (!counters.length) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                    entry.target.classList.add('counted');
                    const target = parseInt(entry.target.dataset.count || entry.target.textContent);
                    Utils.animateCounter(entry.target, target);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(counter => observer.observe(counter));
    },

    initTabs: function() {
        const tabBtns = document.querySelectorAll('.tab-btn');
        
        if (!tabBtns.length) return;

        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const tabId = btn.dataset.tab;
                const tabsContainer = btn.closest('.tabs');
                
                // Update buttons
                tabsContainer.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                // Update content
                tabsContainer.querySelectorAll('.tab-content').forEach(content => {
                    content.classList.remove('active');
                    if (content.id === tabId) {
                        content.classList.add('active');
                    }
                });
            });
        });
    },

    initAccordion: function() {
        const accordionHeaders = document.querySelectorAll('.accordion-header');
        
        if (!accordionHeaders.length) return;

        accordionHeaders.forEach(header => {
            header.addEventListener('click', () => {
                const item = header.parentElement;
                const wasActive = item.classList.contains('active');
                
                // Close all items in same accordion
                const accordion = item.closest('.accordion');
                accordion.querySelectorAll('.accordion-item').forEach(i => {
                    i.classList.remove('active');
                });

                // Toggle clicked item
                if (!wasActive) {
                    item.classList.add('active');
                }
            });
        });
    },

    initVisitorCounter: function() {
        const counterElement = document.getElementById('visitorCount');
        if (!counterElement) return;

        const key = window.SmartLifeConfig?.VISITOR_KEY || 'smartlife_visitors';
        let count = parseInt(localStorage.getItem(key)) || 1000;
        
        // Check if new visit
        const lastVisit = localStorage.getItem('smartlife_lastvisit');
        const today = new Date().toDateString();
        
        if (lastVisit !== today) {
            count++;
            localStorage.setItem(key, count);
            localStorage.setItem('smartlife_lastvisit', today);
        }

        counterElement.textContent = count.toLocaleString();
    }
};

// Export
window.Animations = Animations;
