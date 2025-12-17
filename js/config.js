/* ========================================
   Configuration & Data
   ======================================== */

// Chatbot Knowledge Base
const chatbotKnowledge = {
    // Greetings
    'hello': 'Hello! Welcome to SmartLife Hub! 👋 How can I assist you today?',
    'hi': 'Hi there! I\'m your SmartLife assistant. Ask me about our services!',
    'hey': 'Hey! Great to see you! What would you like to know?',
    
    // Services
    'education': '📚 Our Education services include online courses, tutoring, learning resources, and skill development programs for all ages.',
    'environment': '🌱 We provide environmental awareness programs, sustainability guides, green living tips, and climate action resources.',
    'healthcare': '🏥 Healthcare services include health tips, mental wellness resources, medical information, and fitness guidance.',
    'real estate': '🏠 Our Real Estate section helps with property search, market analysis, investment tips, and home improvement guides.',
    'transportation': '🚗 Transportation services cover traffic updates, public transit info, vehicle tips, and sustainable mobility solutions.',
    'engineering': '⚙️ Engineering resources include technical tutorials, innovation news, project guides, and career development.',
    'robotics': '🤖 Explore robotics with tutorials, automation news, AI developments, and hands-on project guides.',
    'coding': '💻 Coding resources include programming tutorials, development tools, code challenges, and tech career guidance.',
    'news': '📰 Stay updated with the latest news across all our domains. Visit our News page for current articles!',
    'social': '🤝 Social issues coverage includes community support, awareness campaigns, and civic engagement resources.',
    
    // General
    'services': 'We offer 10 main services: Education, Environment, Healthcare, News, Social Issues, Real Estate, Transportation, Engineering, Robotics, and Coding.',
    'about': 'SmartLife Hub is a comprehensive platform for public awareness, education, and technology. We empower communities with knowledge!',
    'contact': 'You can reach us at contact@smartlifehub.com or call +1 (555) 123-4567. Visit our Contact page for more options!',
    'help': 'I can help you with: our services, contact info, navigation, and general questions. Just ask!',
    
    // Default
    'default': 'I\'m not sure about that. Try asking about our services, education, healthcare, or type "help" for options!'
};

// News Categories
const newsCategories = ['all', 'education', 'environment', 'healthcare', 'technology', 'social', 'real-estate'];

// Visitor Counter Key
const VISITOR_KEY = 'smartlife_visitors';

// Export for other modules
window.SmartLifeConfig = {
    chatbotKnowledge,
    newsCategories,
    VISITOR_KEY
};
