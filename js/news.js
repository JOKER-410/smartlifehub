/* ========================================
   News Filter & Likes Module
   ======================================== */

const News = {
    init: function() {
        this.initFilter();
        this.initLikes();
    },

    initFilter: function() {
        const filterBtns = document.querySelectorAll('.filter-btn');
        const newsCards = document.querySelectorAll('.news-card');

        if (!filterBtns.length) return;

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Update active button
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                // Filter cards
                const category = btn.dataset.filter;
                
                newsCards.forEach(card => {
                    const cardCategory = card.dataset.category;
                    
                    if (category === 'all' || cardCategory === category) {
                        card.style.display = 'block';
                        card.style.animation = 'fadeIn 0.5s ease';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    },

    initLikes: function() {
        const likeButtons = document.querySelectorAll('.like-btn');

        likeButtons.forEach(btn => {
            // Get stored like state
            const articleId = btn.dataset.article;
            const storageKey = `like_${articleId}`;
            const isLiked = localStorage.getItem(storageKey) === 'true';

            if (isLiked) {
                btn.classList.add('liked');
                const count = btn.querySelector('.like-count');
                if (count) {
                    count.textContent = parseInt(count.textContent) + 1;
                }
            }

            btn.addEventListener('click', () => this.toggleLike(btn));
        });
    },

    toggleLike: function(btn) {
        const articleId = btn.dataset.article;
        const storageKey = `like_${articleId}`;
        const countElement = btn.querySelector('.like-count');
        const isLiked = btn.classList.toggle('liked');

        if (countElement) {
            let count = parseInt(countElement.textContent);
            count = isLiked ? count + 1 : count - 1;
            countElement.textContent = count;
        }

        // Save state
        localStorage.setItem(storageKey, isLiked);
    }
};

// Export
window.News = News;
