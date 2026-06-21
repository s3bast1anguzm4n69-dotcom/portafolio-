// Mobile Menu Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
}

// Close menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        if (navToggle) {
            navToggle.classList.remove('active');
        }
    });
});

// Active Link Highlighting
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Form Submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const nameInput = this.querySelector('input[name="nombre"]');
        const emailInput = this.querySelector('input[name="email"]');
        const messageInput = this.querySelector('textarea[name="mensaje"]');
        
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();
        
        if (name === '' || email === '' || message === '') {
            showNotification('Por favor completa todos los campos requeridos', 'error');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showNotification('Por favor ingresa un correo válido', 'error');
            return;
        }
        
        // Simulate form submission
        showNotification('¡Mensaje enviado exitosamente! Me pondré en contacto pronto.', 'success');
        contactForm.reset();
    });
}

// Notification Function
function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
        <span>${message}</span>
    `;
    
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    // Remove notification after 5 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 5000);
}

// Scroll Animation for Elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe project cards and skill categories
document.querySelectorAll('.project-card, .skill-category').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// Add styles for notifications dynamically
const style = document.createElement('style');
style.innerHTML = `
    .notification {
        position: fixed;
        bottom: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 8px;
        background: var(--dark-secondary);
        border-left: 4px solid;
        display: flex;
        align-items: center;
        gap: 10px;
        color: var(--text-light);
        opacity: 0;
        transform: translateX(400px);
        transition: all 0.3s ease;
        z-index: 1001;
        max-width: 350px;
    }

    .notification.show {
        opacity: 1;
        transform: translateX(0);
    }

    .notification.success {
        border-left-color: #00d084;
    }

    .notification.success i {
        color: #00d084;
    }

    .notification.error {
        border-left-color: #ff6b6b;
    }

    .notification.error i {
        color: #ff6b6b;
    }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @media (max-width: 480px) {
        .notification {
            left: 20px;
            right: 20px;
            max-width: none;
        }
    }
`;
document.head.appendChild(style);

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

console.log('🎉 Portafolio cargado correctamente');
