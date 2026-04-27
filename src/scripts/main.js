/* ============================================
   STICKY NAVIGATION
   ============================================ */

const stickyNav = document.getElementById('stickyNav');
const heroSection = document.getElementById('hero');
let lastScrollY = 0;

// Show/hide sticky nav based on scroll position
function handleScroll() {
    const scrollY = window.scrollY;
    const heroBottom = heroSection.getBoundingClientRect().bottom;

    // Show nav when hero is no longer fully visible
    if (heroBottom < 100) {
        stickyNav.classList.add('visible');
    } else {
        stickyNav.classList.remove('visible');
    }

    // Hide nav when scrolling down, show when scrolling up
    if (scrollY > lastScrollY && scrollY > 200) {
        stickyNav.classList.remove('visible');
    } else if (scrollY < lastScrollY) {
        if (heroSection.getBoundingClientRect().bottom < 100) {
            stickyNav.classList.add('visible');
        }
    }

    lastScrollY = scrollY;
}

// Throttle scroll events for performance
let ticking = false;
function throttleScroll() {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            handleScroll();
            ticking = false;
        });
        ticking = true;
    }
}

window.addEventListener('scroll', throttleScroll, { passive: true });

/* ============================================
   SMOOTH SCROLL FOR NAVIGATION LINKS
   ============================================ */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // Skip if it's just "#"
        if (href === '#') return;

        // Allow download links to work normally
        if (this.hasAttribute('download')) return;

        const target = document.querySelector(href);

        if (target) {
            e.preventDefault();
            const navHeight = stickyNav.offsetHeight;
            const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            // Set focus for accessibility
            target.setAttribute('tabindex', '-1');
            target.focus();
        }
    });
});

/* ============================================
   EXPAND/COLLAPSE EARLIER ROLES
   ============================================ */

const expandRolesBtn = document.getElementById('expandRolesBtn');
const earlierRolesList = document.getElementById('earlierRolesList');

if (expandRolesBtn && earlierRolesList) {
    expandRolesBtn.addEventListener('click', function() {
        const isExpanded = this.getAttribute('aria-expanded') === 'true';

        if (isExpanded) {
            earlierRolesList.classList.add('hidden');
            this.textContent = 'View All Roles';
            this.setAttribute('aria-expanded', 'false');
        } else {
            earlierRolesList.classList.remove('hidden');
            this.textContent = 'Show Less';
            this.setAttribute('aria-expanded', 'true');
        }
    });
}

/* ============================================
   INTERSECTION OBSERVER FOR ANIMATIONS
   ============================================ */

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const fadeInOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply to all cards
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll(
        '.case-study-card, .experience-card, .metric-card, .contact-card'
    );

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        fadeInOnScroll.observe(el);
    });
});

/* ============================================
   DOWNLOAD TRACKING (Optional Analytics)
   ============================================ */

const downloadLinks = document.querySelectorAll('a[download]');

downloadLinks.forEach(link => {
    link.addEventListener('click', function() {
        // Console log for testing - replace with actual analytics
        console.log('Resume downloaded from:', window.location.pathname);

        // Example: Google Analytics event
        // if (typeof gtag !== 'undefined') {
        //     gtag('event', 'download', {
        //         'event_category': 'resume',
        //         'event_label': 'pdf_download'
        //     });
        // }
    });
});

/* ============================================
   KEYBOARD NAVIGATION ENHANCEMENTS
   ============================================ */

// Add keyboard trap for expanded section
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && expandRolesBtn) {
        const isExpanded = expandRolesBtn.getAttribute('aria-expanded') === 'true';
        if (isExpanded) {
            earlierRolesList.classList.add('hidden');
            expandRolesBtn.textContent = 'View All Roles';
            expandRolesBtn.setAttribute('aria-expanded', 'false');
            expandRolesBtn.focus();
        }
    }
});

/* ============================================
   PREFERS-REDUCED-MOTION DETECTION
   ============================================ */

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (prefersReducedMotion.matches) {
    // Disable intersection observer animations
    fadeInOnScroll.disconnect();

    // Reset all animated elements
    document.querySelectorAll(
        '.case-study-card, .experience-card, .metric-card, .contact-card'
    ).forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'none';
    });
}

// Listen for changes in preference
prefersReducedMotion.addEventListener('change', () => {
    location.reload();
});
