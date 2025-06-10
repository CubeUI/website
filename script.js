// Smooth scrolling to sections
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Handle purchase with Stripe
function handlePurchase() {
    // In a real implementation, you would integrate with Stripe
    // For now, we'll show an alert and redirect to a placeholder
    alert('Redirecting to Stripe checkout...\n\nIn the real implementation, this would open Stripe\'s secure checkout for the $59 annual license.');
    
    // Example Stripe integration (uncomment when ready):
    // window.location.href = 'https://buy.stripe.com/your-payment-link';
}

// Join waiting list to gauge interest
function joinWaitingList() {
    // Scroll to the embedded form in the CTA section
    const ctaSection = document.querySelector('section:has(.formkit-form)');
    if (ctaSection) {
        ctaSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'center'
        });
        
        // Focus on the email input field
        setTimeout(() => {
            const emailInput = ctaSection.querySelector('input[name="email_address"]');
            if (emailInput) {
                emailInput.focus();
            }
        }, 500);
    }
}

// Open demo (placeholder)
function openDemo() {
    alert('Demo coming soon!\n\nThe interactive demo will showcase CubeKit components in action with real Cube.dev data.');
    // In real implementation, this could open a modal or redirect to demo page
}

// Add smooth scroll behavior to all anchor links
document.addEventListener('DOMContentLoaded', function() {
    // Image modal setup
    const modal = document.getElementById('imageModal');
    const modalBackdrop = modal && modal.querySelector('.modal-backdrop');
    
    if (modalBackdrop) {
        modalBackdrop.addEventListener('click', function(e) {
            if (e.target === this) {
                closeImageModal();
            }
        });
    }
    
    // Close modal on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeImageModal();
        }
    });

    // Handle navigation clicks
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });

    // Add animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe feature cards and other animated elements
    const animatedElements = document.querySelectorAll('.feature-card, .pricing-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Animate chart bars
    const chartBars = document.querySelectorAll('.chart-bar');
    setTimeout(() => {
        chartBars.forEach((bar, index) => {
            setTimeout(() => {
                bar.style.opacity = '1';
                bar.style.transform = 'scaleY(1)';
            }, index * 100);
        });
    }, 500);
});

// Mobile menu toggle (if needed)
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    if (menu) {
        menu.classList.toggle('hidden');
    }
}

// Image modal functionality
function openImageModal(imageSrc, imageAlt) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    
    modalImage.src = imageSrc;
    modalImage.alt = imageAlt;
    modal.classList.add('modal-open');
    
    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden';
}

function closeImageModal() {
    const modal = document.getElementById('imageModal');
    modal.classList.remove('modal-open');
    
    // Restore body scrolling
    document.body.style.overflow = 'auto';
} 