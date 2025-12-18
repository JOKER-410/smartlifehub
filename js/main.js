/* ========================================
   Main Entry Point - Initialize All Modules
   ======================================== */

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all modules
    if (window.Navigation) Navigation.init();
    if (window.Chatbot) Chatbot.init();
    if (window.News) News.init();
    if (window.Forms) Forms.init();
    if (window.Animations) Animations.init();

    console.log('SmartLife Hub initialized successfully! 🚀');
});

/* ========================================
   Task M3: Advanced JavaScript Features Demo
   Data Types, Conditions, Objects, Built-in Functions, Error Handling
   ======================================== */

// 1. DATA TYPES DEMONSTRATION
const DataTypesDemo = {
    // String - Text data
    siteName: "SmartLife Hub",
    
    // Number - Numeric data (integers and decimals)
    visitorCount: 15000,
    rating: 4.8,
    
    // Boolean - True/false values
    isOnline: true,
    isDarkMode: false,
    
    // Array - Collection of values
    services: ["Education", "Healthcare", "Technology", "Environment"],
    
    // Object - Key-value pairs
    contact: {
        email: "info@smartlifehub.com",
        phone: "+1-555-0123",
        location: "Tech Valley"
    },
    
    // Null and Undefined
    selectedService: null,
    pendingData: undefined,
    
    // Function to display types
    showTypes: function() {
        console.log("=== JavaScript Data Types Demo ===");
        console.log("String:", typeof this.siteName, "-", this.siteName);
        console.log("Number:", typeof this.visitorCount, "-", this.visitorCount);
        console.log("Boolean:", typeof this.isOnline, "-", this.isOnline);
        console.log("Array:", Array.isArray(this.services), "-", this.services);
        console.log("Object:", typeof this.contact, "-", this.contact);
        console.log("Null:", this.selectedService);
        console.log("Undefined:", this.pendingData);
    }
};

// 2. CONDITIONS DEMONSTRATION
const ConditionsDemo = {
    checkUserStatus: function(visits) {
        // If-else conditions
        if (visits > 100) {
            return "Premium Member 🌟";
        } else if (visits > 50) {
            return "Gold Member 🥇";
        } else if (visits > 10) {
            return "Regular Member 👤";
        } else {
            return "New Visitor 👋";
        }
    },
    
    getRating: function(score) {
        // Switch statement
        switch (true) {
            case score >= 90: return "Excellent ⭐⭐⭐⭐⭐";
            case score >= 80: return "Very Good ⭐⭐⭐⭐";
            case score >= 70: return "Good ⭐⭐⭐";
            case score >= 60: return "Fair ⭐⭐";
            default: return "Needs Improvement ⭐";
        }
    },
    
    // Ternary operator
    getGreeting: function(hour) {
        return hour < 12 ? "Good Morning! ☀️" :
               hour < 18 ? "Good Afternoon! 🌤️" : "Good Evening! 🌙";
    }
};

// 3. OBJECTS & METHODS DEMONSTRATION
const ServiceObject = {
    name: "SmartLife Services",
    categories: [],
    
    // Method to add service
    addCategory: function(category) {
        this.categories.push(category);
        return this;
    },
    
    // Method to list services
    listCategories: function() {
        return this.categories.join(", ");
    },
    
    // Method with 'this' keyword
    getInfo: function() {
        return `${this.name} offers: ${this.listCategories()}`;
    }
};

// 4. BUILT-IN FUNCTIONS DEMONSTRATION
const BuiltInFunctionsDemo = {
    // String methods
    stringMethods: function() {
        const text = "SmartLife Hub";
        return {
            uppercase: text.toUpperCase(),
            lowercase: text.toLowerCase(),
            length: text.length,
            includes: text.includes("Life"),
            split: text.split(" "),
            replace: text.replace("Hub", "Platform")
        };
    },
    
    // Array methods
    arrayMethods: function() {
        const numbers = [5, 2, 8, 1, 9];
        const services = ["Education", "Health", "Tech"];
        return {
            sorted: [...numbers].sort((a, b) => a - b),
            filtered: numbers.filter(n => n > 4),
            mapped: services.map(s => s.toUpperCase()),
            found: services.find(s => s.includes("Health")),
            reduced: numbers.reduce((sum, n) => sum + n, 0)
        };
    },
    
    // Math methods
    mathMethods: function() {
        return {
            random: Math.floor(Math.random() * 100),
            max: Math.max(10, 20, 5),
            min: Math.min(10, 20, 5),
            round: Math.round(4.6),
            sqrt: Math.sqrt(16),
            power: Math.pow(2, 3)
        };
    },
    
    // Date methods
    dateMethods: function() {
        const now = new Date();
        return {
            full: now.toLocaleDateString(),
            time: now.toLocaleTimeString(),
            year: now.getFullYear(),
            month: now.getMonth() + 1,
            day: now.getDate()
        };
    }
};

// 5. ERROR HANDLING DEMONSTRATION
const ErrorHandlingDemo = {
    // Try-catch-finally
    safeDivide: function(a, b) {
        try {
            if (b === 0) {
                throw new Error("Cannot divide by zero!");
            }
            return a / b;
        } catch (error) {
            console.error("Error:", error.message);
            return null;
        } finally {
            console.log("Division operation completed");
        }
    },
    
    // Custom validation
    validateEmail: function(email) {
        try {
            if (!email) {
                throw new TypeError("Email is required");
            }
            if (!email.includes("@")) {
                throw new SyntaxError("Invalid email format");
            }
            return { valid: true, email };
        } catch (error) {
            return { valid: false, error: error.message };
        }
    },
    
    // Safe JSON parsing
    parseJSON: function(jsonString) {
        try {
            return JSON.parse(jsonString);
        } catch (error) {
            console.error("JSON Parse Error:", error.message);
            return null;
        }
    }
};

// Run demos in console (for development)
if (typeof window !== 'undefined') {
    window.SmartLifeDemo = {
        DataTypesDemo,
        ConditionsDemo,
        ServiceObject,
        BuiltInFunctionsDemo,
        ErrorHandlingDemo
    };
}
