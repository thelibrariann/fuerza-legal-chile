// ===========================
// Menú Hamburguesa
// ===========================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Cerrar menú al hacer click en un enlace
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ===========================
// Scroll suave
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 70;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===========================
// Header con fondo al hacer scroll
// ===========================
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// ===========================
// Animación al aparecer elementos
// ===========================
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

// Observar tarjetas de servicios
document.querySelectorAll('.service-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Observar contenedores de embeds
document.querySelectorAll('.embed-container').forEach(container => {
    container.style.opacity = '0';
    container.style.transform = 'translateY(30px)';
    container.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(container);
});

// ===========================
// Prevenir que el formulario se envíe (si se agrega en el futuro)
// ===========================
const forms = document.querySelectorAll('form');
forms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // Aquí iría la lógica de envío del formulario
    });
});

// ===========================
// Botones flotantes siempre visibles
// ===========================
const whatsappFloat = document.querySelector('.whatsapp-float');
if (whatsappFloat) {
    // Asegurar que el botón de WhatsApp esté siempre visible
    whatsappFloat.style.opacity = '1';
    whatsappFloat.style.visibility = 'visible';
}

const calendarFloat = document.querySelector('.calendar-float');
if (calendarFloat) {
    // Asegurar que el botón de agendamiento esté siempre visible
    calendarFloat.style.opacity = '1';
    calendarFloat.style.visibility = 'visible';
}

// ===========================
// Año actual en el footer
// ===========================
const currentYear = new Date().getFullYear();
const footerYear = document.querySelector('.footer-bottom p');
if (footerYear) {
    footerYear.textContent = footerYear.textContent.replace('2024', currentYear);
}

// ===========================
// Efectos adicionales
// ===========================

// Añadir clase active al link del menú según la sección visible
const sections = document.querySelectorAll('section[id]');

function highlightNavLink() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-menu a[href="#${sectionId}"]`);
        
        if (navLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink.style.color = 'var(--primary-color)';
            } else {
                navLink.style.color = 'var(--text-dark)';
            }
        }
    });
}

window.addEventListener('scroll', highlightNavLink);

// ===========================
// Mensaje de bienvenida en consola
// ===========================
console.log('%c🏛️ Fuerza Legal', 'font-size: 24px; font-weight: bold; color: #1a237e;');
console.log('%c💼 Estudio Jurídico | Región del Maule', 'font-size: 14px; color: #757575;');
console.log('%c📱 ¿Necesitas asesoría legal? Contáctanos', 'font-size: 12px; color: #c62828;');
