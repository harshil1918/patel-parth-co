/* ===========================
   PATEL PARTH & CO - SCRIPTS
   =========================== */

document.addEventListener('DOMContentLoaded', () => {

    // --- Preloader ---
    const preloader = document.getElementById('preloader');
    window.addEventListener('load', () => {
        setTimeout(() => preloader.classList.add('hidden'), 600);
    });
    setTimeout(() => preloader.classList.add('hidden'), 3000);

    // --- Cursor Glow ---
    const cursorGlow = document.getElementById('cursorGlow');
    if (window.matchMedia('(pointer: fine)').matches && cursorGlow) {
        document.addEventListener('mousemove', (e) => {
            cursorGlow.style.left = e.clientX + 'px';
            cursorGlow.style.top = e.clientY + 'px';
        });
        document.addEventListener('mouseenter', () => cursorGlow.classList.add('active'));
        document.addEventListener('mouseleave', () => cursorGlow.classList.remove('active'));
        cursorGlow.classList.add('active');
    }

    // --- Hero Particles ---
    const heroParticles = document.getElementById('heroParticles');
    if (heroParticles) {
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 8 + 's';
            particle.style.animationDuration = (6 + Math.random() * 6) + 's';
            particle.style.width = (3 + Math.random() * 5) + 'px';
            particle.style.height = particle.style.width;
            heroParticles.appendChild(particle);
        }
    }

    // --- Navbar Scroll ---
    const navbar = document.getElementById('navbar');
    const backToTop = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        const y = window.scrollY;
        navbar.classList.toggle('scrolled', y > 50);
        backToTop.classList.toggle('visible', y > 400);
        updateActiveNavLink();
    });

    // --- Active Nav Link ---
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        let current = '';

        sections.forEach(sec => {
            if (window.scrollY >= sec.offsetTop - 120) {
                current = sec.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
        });
    }

    // --- Mobile Menu ---
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });

    // --- Scroll Animations ---
    const animateEls = document.querySelectorAll('[data-animate]');
    const animObs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.getAttribute('data-delay') || 0;
                setTimeout(() => entry.target.classList.add('animate-in'), parseInt(delay));
                animObs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

    animateEls.forEach(el => animObs.observe(el));

    // --- Counter Animation ---
    const counters = document.querySelectorAll('[data-count]');
    const counterObs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target, parseInt(entry.target.getAttribute('data-count')));
                counterObs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(c => counterObs.observe(c));

    function animateCounter(el, target) {
        let current = 0;
        const step = target / (2000 / 16);
        function update() {
            current += step;
            if (current >= target) {
                el.textContent = target.toLocaleString();
                return;
            }
            el.textContent = Math.floor(current).toLocaleString();
            requestAnimationFrame(update);
        }
        update();
    }

    // --- Testimonial Slider ---
    const track = document.getElementById('testimonialTrack');
    const dotsContainer = document.getElementById('sliderDots');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (track) {
        const cards = track.querySelectorAll('.testimonial-card');
        let currentSlide = 0;
        const totalSlides = cards.length;

        // Create dots
        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(i));
            dotsContainer.appendChild(dot);
        }

        function goToSlide(index) {
            currentSlide = index;
            track.style.transform = `translateX(-${currentSlide * 100}%)`;
            dotsContainer.querySelectorAll('.dot').forEach((d, i) => {
                d.classList.toggle('active', i === currentSlide);
            });
        }

        prevBtn.addEventListener('click', () => {
            goToSlide(currentSlide === 0 ? totalSlides - 1 : currentSlide - 1);
        });

        nextBtn.addEventListener('click', () => {
            goToSlide(currentSlide === totalSlides - 1 ? 0 : currentSlide + 1);
        });

        // Auto-slide every 5s
        let autoSlide = setInterval(() => {
            goToSlide(currentSlide === totalSlides - 1 ? 0 : currentSlide + 1);
        }, 5000);

        // Pause on hover
        track.addEventListener('mouseenter', () => clearInterval(autoSlide));
        track.addEventListener('mouseleave', () => {
            autoSlide = setInterval(() => {
                goToSlide(currentSlide === totalSlides - 1 ? 0 : currentSlide + 1);
            }, 5000);
        });
    }

    // --- Smooth Scroll ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const id = this.getAttribute('href');
            if (id === '#') return;
            const target = document.querySelector(id);
            if (target) target.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // --- Contact Form → Web3Forms (Email) + Google Sheets ---
    const contactForm = document.getElementById('contactForm');
    const WEB3FORMS_KEY = 'YOUR_ACCESS_KEY_HERE'; // Replace with client's Web3Forms access key
    const GOOGLE_SHEET_URL = 'YOUR_GOOGLE_SHEET_URL_HERE'; // Replace with your Google Apps Script URL

    if (contactForm) {
        contactForm.addEventListener('submit', async function (e) {
            e.preventDefault();

            const btn = contactForm.querySelector('button[type="submit"]');
            const orig = btn.innerHTML;
            btn.innerHTML = '<span>Sending...</span> <i class="fas fa-spinner fa-spin"></i>';
            btn.disabled = true;

            const fd = new FormData(this);
            const name = fd.get('name');
            const phone = fd.get('phone');
            const email = fd.get('email') || 'Not provided';
            const service = fd.get('service');
            const message = fd.get('message') || 'No message';

            try {
                // 1. Send email via Web3Forms
                const emailData = {
                    access_key: WEB3FORMS_KEY,
                    subject: `New Enquiry from ${name} — PATEL PARTH & CO`,
                    from_name: 'PATEL PARTH & CO Website',
                    name: name,
                    phone: phone,
                    email: email,
                    service: service,
                    message: message
                };

                const emailPromise = fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(emailData)
                });

                // 2. Save to Google Sheets
                const sheetData = { name, phone, email, service, message, date: new Date().toLocaleString('en-IN') };

                const sheetPromise = GOOGLE_SHEET_URL !== 'YOUR_GOOGLE_SHEET_URL_HERE'
                    ? fetch(GOOGLE_SHEET_URL, {
                        method: 'POST',
                        mode: 'no-cors',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(sheetData)
                    })
                    : Promise.resolve();

                // Wait for both
                await Promise.all([emailPromise, sheetPromise]);

                // Success
                btn.innerHTML = '<span>Message Sent!</span> <i class="fas fa-check-circle"></i>';
                btn.style.background = '#22C55E';
                contactForm.reset();

            } catch (error) {
                // Error
                btn.innerHTML = '<span>Failed! Try Again</span> <i class="fas fa-exclamation-circle"></i>';
                btn.style.background = '#EF4444';
            }

            setTimeout(() => {
                btn.innerHTML = orig;
                btn.style.background = '';
                btn.disabled = false;
            }, 3000);
        });
    }
});
