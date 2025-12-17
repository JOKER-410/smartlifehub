/* ========================================
   Chatbot Module
   ======================================== */

const Chatbot = {
    init: function() {
        const toggle = document.getElementById('chatbotToggle');
        const chatWindow = document.getElementById('chatbotWindow');
        const close = document.getElementById('chatbotClose');
        const input = document.getElementById('chatbotInput');
        const sendBtn = document.getElementById('chatbotSend');

        if (!toggle) return;

        // Toggle window
        toggle.addEventListener('click', () => {
            chatWindow.classList.toggle('active');
            if (chatWindow.classList.contains('active')) {
                input.focus();
            }
        });

        // Close button
        if (close) {
            close.addEventListener('click', () => {
                chatWindow.classList.remove('active');
            });
        }

        // Send message
        if (sendBtn) {
            sendBtn.addEventListener('click', () => this.sendMessage());
        }

        // Enter key
        if (input) {
            input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.sendMessage();
                }
            });
        }
    },

    sendMessage: function() {
        const input = document.getElementById('chatbotInput');
        const messages = document.getElementById('chatbotMessages');
        const message = input.value.trim();

        if (!message) return;

        // Add user message
        this.addMessage(message, 'user');

        // Clear input
        input.value = '';

        // Get bot response
        setTimeout(() => {
            const response = this.getResponse(message);
            this.addMessage(response, 'bot');
        }, 500);
    },

    addMessage: function(text, type) {
        const messages = document.getElementById('chatbotMessages');
        const messageDiv = document.createElement('div');
        messageDiv.className = `chat-message ${type}`;
        messageDiv.textContent = text;
        messages.appendChild(messageDiv);
        messages.scrollTop = messages.scrollHeight;
    },

    getResponse: function(message) {
        const knowledge = window.SmartLifeConfig?.chatbotKnowledge || {};
        const lowerMessage = message.toLowerCase();

        // Check for keywords
        for (const [keyword, response] of Object.entries(knowledge)) {
            if (lowerMessage.includes(keyword)) {
                return response;
            }
        }

        return knowledge.default || "I'm here to help! Try asking about our services.";
    }
};

// Export
window.Chatbot = Chatbot;
