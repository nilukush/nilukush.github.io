// Enhanced form validation and submission module

// Real-time validation function
const validateField = (field) => {
    const value = field.value.trim();
    let isValid = true;
    let errorMessage = '';
    
    if (field.hasAttribute('required') && !value) {
        isValid = false;
        errorMessage = 'This field is required';
    } else if (field.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            isValid = false;
            errorMessage = 'Please enter a valid email address';
        }
    } else if (field.maxLength > 0 && value.length > field.maxLength) {
        isValid = false;
        errorMessage = `Maximum ${field.maxLength} characters allowed`;
    }
    
    // Update field styling
    field.style.borderColor = isValid ? 'var(--border-color)' : '#ef4444';
    
    // Show/hide error message
    let errorEl = field.parentElement.querySelector('.error-message');
    if (!isValid && errorMessage) {
        if (!errorEl) {
            errorEl = document.createElement('span');
            errorEl.className = 'error-message';
            errorEl.style.cssText = 'color: #ef4444; font-size: 0.875rem; margin-top: 5px; display: block;';
            field.parentElement.appendChild(errorEl);
        }
        errorEl.textContent = errorMessage;
    } else if (errorEl) {
        errorEl.remove();
    }
    
    return isValid;
};

// Initialize form validation and submission
export const initializeContactForm = () => {
    const form = document.querySelector('.contact-form');
    if (!form) return;
    
    const submitButton = form.querySelector('.submit-button');
    const formLoadTime = Date.now();
    
    // Add validation to all form fields
    form.querySelectorAll('input[required], textarea[required]').forEach(field => {
        field.addEventListener('blur', () => validateField(field));
        field.addEventListener('input', () => {
            if (field.parentElement.querySelector('.error-message')) {
                validateField(field);
            }
        });
    });
    
    // Form submission handler
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Bot protection: Check submission time
        const submissionTime = Date.now();
        const timeDiff = (submissionTime - formLoadTime) / 1000;
        if (timeDiff < 3) {
            // Silently reject - likely a bot
            return false;
        }
        
        // Validate all fields
        const fields = form.querySelectorAll('input[required], textarea[required]');
        let isFormValid = true;
        fields.forEach(field => {
            if (!validateField(field)) {
                isFormValid = false;
            }
        });
        
        if (!isFormValid) {
            return false;
        }
        
        // Show loading state
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';
        
        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: new FormData(form),
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                // Announce success to screen readers
                announceToScreenReader('Message sent successfully!', 'assertive');
                
                // Success feedback
                form.innerHTML = `
                    <div style="text-align: center; padding: 40px 20px;" role="status" aria-live="polite">
                        <div style="font-size: 3rem; margin-bottom: 20px;">✅</div>
                        <h3 style="color: var(--success-color); margin-bottom: 10px;">Message Sent Successfully!</h3>
                        <p style="color: var(--text-secondary);">Thank you for reaching out. I'll get back to you within 24 hours.</p>
                    </div>
                `;
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            // Error feedback
            submitButton.disabled = false;
            submitButton.textContent = 'Send Message';
            
            // Show error message
            let errorAlert = form.querySelector('.form-error');
            if (!errorAlert) {
                errorAlert = document.createElement('div');
                errorAlert.className = 'form-error';
                errorAlert.style.cssText = 'background: #fee; color: #c00; padding: 12px; border-radius: 6px; margin-bottom: 20px;';
                form.insertBefore(errorAlert, form.firstChild);
            }
            errorAlert.textContent = 'Sorry, there was an error sending your message. Please try again or contact directly via email/phone.';
            errorAlert.setAttribute('role', 'alert');
            errorAlert.setAttribute('aria-live', 'assertive');
            
            // Announce error to screen readers
            announceToScreenReader('Error sending message. Please try again.', 'assertive');
        }
    });
};

// Auto-initialize when DOM is ready
if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeContactForm);
    } else {
        initializeContactForm();
    }
}

// Export additional utilities if needed
export { validateField };