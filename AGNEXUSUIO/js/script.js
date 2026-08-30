// AGNEXUSUIO - JavaScript

document.addEventListener('DOMContentLoaded', function() {
    
    // ===== Mobile Menu Toggle =====
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            
            // Toggle icon
            const icon = mobileMenuBtn.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        // Close menu when clicking a link
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.add('hidden');
                const icon = mobileMenuBtn.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }
    
    // ===== Header Scroll Effect =====
    const header = document.getElementById('header');
    
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.classList.add('header-scrolled');
            } else {
                header.classList.remove('header-scrolled');
            }
        });
    }
    
    // ===== FAQ Accordion =====
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const icon = this.querySelector('i');
            
            // Toggle current
            answer.classList.toggle('hidden');
            answer.classList.toggle('active');
            
            // Rotate icon
            if (answer.classList.contains('active')) {
                icon.style.transform = 'rotate(180deg)';
            } else {
                icon.style.transform = 'rotate(0deg)';
            }
            
            // Close other FAQs (optional - accordion behavior)
            faqQuestions.forEach(otherQuestion => {
                if (otherQuestion !== question) {
                    const otherAnswer = otherQuestion.nextElementSibling;
                    const otherIcon = otherQuestion.querySelector('i');
                    otherAnswer.classList.add('hidden');
                    otherAnswer.classList.remove('active');
                    otherIcon.style.transform = 'rotate(0deg)';
                }
            });
        });
    });
    
    // ===== Contact Form to WhatsApp =====
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const nombre = document.getElementById('nombre').value.trim();
            const telefono = document.getElementById('telefono').value.trim();
            const correo = document.getElementById('correo').value.trim();
            const ciudad = document.getElementById('ciudad').value.trim();
            const tipoInstalacion = document.getElementById('tipo-instalacion').value;
            const vehiculo = document.getElementById('vehiculo').value.trim();
            const mensaje = document.getElementById('mensaje').value.trim();
            
            // Validate required fields
            if (!nombre || !telefono || !correo || !ciudad || !tipoInstalacion) {
                alert('Por favor completa los campos obligatorios (*)');
                return;
            }
            
            // Build WhatsApp message
            let whatsappMessage = `Hola AGNEXUSUIO, deseo solicitar una cotización.\n\n`;
            whatsappMessage += `*Nombre:* ${nombre}\n`;
            whatsappMessage += `*Teléfono:* ${telefono}\n`;
            whatsappMessage += `*Correo:* ${correo}\n`;
            whatsappMessage += `*Ciudad:* ${ciudad}\n`;
            whatsappMessage += `*Tipo de instalación:* ${tipoInstalacion}\n`;
            
            if (vehiculo) {
                whatsappMessage += `*Vehículo:* ${vehiculo}\n`;
            }
            
            if (mensaje) {
                whatsappMessage += `*Mensaje:* ${mensaje}\n`;
            }
            
            // Encode and open WhatsApp
            const encodedMessage = encodeURIComponent(whatsappMessage);
            const whatsappUrl = `https://wa.me/593992217314?text=${encodedMessage}`;
            
            // Open in new tab
            window.open(whatsappUrl, '_blank');
            
            // Reset form
            contactForm.reset();
        });
    }
    
    // ===== Smooth Scroll for Anchor Links =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                
                if (target) {
                    const headerHeight = header ? header.offsetHeight : 0;
                    const targetPosition = target.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // ===== Intersection Observer for Animations =====
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
                
                // Add slide-up animation to service cards and client cards
                if (entry.target.classList.contains('service-card') || 
                    entry.target.classList.contains('client-card')) {
                    entry.target.classList.add('animate-slide-up');
                }
            }
        });
    }, observerOptions);
    
    // Observe elements
    document.querySelectorAll('.service-card, .client-card, .faq-item').forEach(el => {
        observer.observe(el);
    });
    
    // ===== Active Navigation Link on Scroll =====
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    if (sections.length > 0 && navLinks.length > 0) {
        window.addEventListener('scroll', () => {
            let current = '';
            const scrollPosition = window.scrollY + 200;
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    current = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('text-white');
                link.classList.add('text-gray-300');
                
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.remove('text-gray-300');
                    link.classList.add('text-white');
                }
            });
        });
    }
    
    // ===== Lazy Loading Images Enhancement =====
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('opacity-0');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
    
    // ===== Button Ripple Effect =====
    const buttons = document.querySelectorAll('button, .bg-gradient-to-r');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function(e) {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const ripple = document.createElement('span');
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
            ripple.style.width = '100px';
            ripple.style.height = '100px';
            ripple.style.left = `${x - 50}px`;
            ripple.style.top = `${y - 50}px`;
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple 0.6s ease-out';
            ripple.style.pointerEvents = 'none';
            
            button.style.position = 'relative';
            button.style.overflow = 'hidden';
            button.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });
    
    // ===== Console Welcome Message =====
    console.log('%c🔌 AGNEXUSUIO - E-Mobility Solutions', 'color: #10b981; font-size: 20px; font-weight: bold;');
    console.log('%cInstalación de cargadores para vehículos eléctricos en Ecuador', 'color: #2563eb; font-size: 14px;');
    console.log('%cContacto: +593 99 221 7314 | contacto@agnexusuio.com', 'color: #64748b; font-size: 12px;');
    
});

// Add ripple keyframe dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
