// Utility Functions
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

// Hamburger Menu Toggle
const initializeHamburger = () => {
    const hamburger = $('#hamburger');
    const navLinks = $('#nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        $$('#nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }
};

// Scroll to Top Button
const initializeScrollToTop = () => {
    const scrollToTopButton = $('#scroll-to-top');

    if (scrollToTopButton) {
        window.addEventListener('scroll', () => {
            scrollToTopButton.style.display = window.scrollY > 300 ? 'block' : 'none';
        });

        scrollToTopButton.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
};

// Scroll to Section Functionality
const scrollToSection = (sectionId) => {
    const section = $(`#${sectionId}`);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
};

// Contact Form Submission
const initializeContactForm = () => {
    const contactForm = $('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = $('#name')?.value;
            const email = $('#email')?.value;
            const message = $('#message')?.value;

            if (name && email && message) {
                console.log('Form Submitted:', { name, email, message });
                alert('Thank you for your message! We’ll get back to you soon.');
                contactForm.reset();
            } else {
                alert('Please fill out all fields.');
            }
        });
    }
};

// Buy Now Functionality
const initializeBuyNow = () => {
    $$('.buy-now').forEach(button => {
      button.addEventListener('click', () => {
        window.open(
          'https://t.me/sochhat_rotha',
          '_blank'
        );
      });
    });
  };
  

// Open Bot Function for Payment Confirmation
const openBot = () => {
    window.open('https://t.me/sochhat_rotha', '_blank');
};

// Initialize All Features
document.addEventListener('DOMContentLoaded', () => {
    initializeHamburger();
    initializeScrollToTop();
    initializeContactForm();
    initializeBuyNow();
});