// index.js

// Show modal on page load after a short delay
window.addEventListener('DOMContentLoaded', function() {
        setTimeout(function() {
            openModal();
            }, 1000);
});

// Function to open the modal
function openModal() {
    const modalOverlay = document.querySelector('.modal-overlay');
    if (modalOverlay) {
        modalOverlay.classList.add('active');
        // Prevent body scroll when modal is open
        document.body.style.overflow = 'hidden';
    }
}

// Function to close the modal
function closeModal() {
    const modalOverlay = document.querySelector('.modal-overlay');
    if (modalOverlay) {
        modalOverlay.classList.remove('active');
        // Restore body scroll
        document.body.style.overflow = '';
        // Mark modal as seen
        localStorage.setItem('beanBoutiqueModalSeen', 'true');
    }
}

// Close modal when clicking on overlay (but not on modal itself)
document.addEventListener('DOMContentLoaded', function() {
    const modalOverlay = document.querySelector('.modal-overlay');
    if (modalOverlay) {
        modalOverlay.addEventListener('click', function(e) {
            // If click is directly on overlay (not on modal), close it
            if (e.target === modalOverlay) {
                closeModal();
            }
        });
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const modalOverlay = document.querySelector('.modal-overlay');
        if (modalOverlay && modalOverlay.classList.contains('active')) {
            closeModal();
        }
    }
});

// Handle form submission
function handleSubmit(event) {
    event.preventDefault();
    
    const emailInput = document.querySelector('.email-input');
    const email = emailInput.value.trim();
    
    if (email) {
        // Here you would typically send the email to your server
        // For now, we'll just show an alert and close the modal
        alert('Thank you for signing up! Your 10% discount code will be sent to ' + email);
        emailInput.value = '';
        closeModal();
    }
}

