/* ========================================
   Forms & Validation Module
   ======================================== */

const Forms = {
    init: function() {
        const contactForm = document.getElementById('contactForm');
        if (!contactForm) return;

        contactForm.addEventListener('submit', (e) => this.handleSubmit(e));

        // Real-time validation
        const inputs = contactForm.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.addEventListener('blur', () => this.validateField(input));
            input.addEventListener('input', () => this.clearError(input));
        });
    },

    handleSubmit: function(e) {
        e.preventDefault();
        
        const form = e.target;
        let isValid = true;
        
        // Validate all fields
        const fields = ['name', 'email', 'phone', 'category', 'subject', 'message'];
        
        fields.forEach(fieldName => {
            const field = form.querySelector(`[name="${fieldName}"]`);
            if (field && !this.validateField(field)) {
                isValid = false;
            }
        });

        if (isValid) {
            this.showSuccess(form);
        }
    },

    validateField: function(field) {
        const value = field.value.trim();
        const name = field.name;
        let errorMessage = '';

        // Required check
        if (!value) {
            errorMessage = 'This field is required';
        } else {
            // Specific validations
            switch (name) {
                case 'name':
                    if (value.length < 2) {
                        errorMessage = 'Name must be at least 2 characters';
                    }
                    break;
                case 'email':
                    if (!Utils.isValidEmail(value)) {
                        errorMessage = 'Please enter a valid email address';
                    }
                    break;
                case 'phone':
                    if (!Utils.isValidPhone(value)) {
                        errorMessage = 'Please enter a valid phone number';
                    }
                    break;
                case 'message':
                    if (value.length < 10) {
                        errorMessage = 'Message must be at least 10 characters';
                    }
                    break;
            }
        }

        if (errorMessage) {
            this.showError(field, errorMessage);
            return false;
        }

        return true;
    },

    showError: function(field, message) {
        const formGroup = field.closest('.form-group');
        if (!formGroup) return;

        field.style.borderColor = 'var(--danger)';
        
        let errorEl = formGroup.querySelector('.form-error');
        if (!errorEl) {
            errorEl = document.createElement('span');
            errorEl.className = 'form-error';
            formGroup.appendChild(errorEl);
        }
        
        errorEl.textContent = message;
        errorEl.style.display = 'block';
    },

    clearError: function(field) {
        const formGroup = field.closest('.form-group');
        if (!formGroup) return;

        field.style.borderColor = '';
        
        const errorEl = formGroup.querySelector('.form-error');
        if (errorEl) {
            errorEl.style.display = 'none';
        }
    },

    showSuccess: function(form) {
        const formContainer = form.parentElement;
        formContainer.innerHTML = `
            <div class="alert alert-success">
                <span>✅</span>
                <div>
                    <strong>Message Sent Successfully!</strong>
                    <p>Thank you for contacting us. We'll get back to you within 24 hours.</p>
                </div>
            </div>
        `;
    }
};

// Export
window.Forms = Forms;
