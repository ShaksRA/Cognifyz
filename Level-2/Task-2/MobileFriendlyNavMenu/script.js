document.addEventListener('DOMContentLoaded', (event) => {
    const mainNav = document.getElementById('mainNav');
    const menuToggle = document.getElementById('menuToggle');
    const closeMenu = document.getElementById('closeMenu');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuNav = mobileMenu.querySelector('nav');

    // Scroll event listener
    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            mainNav.classList.add('scrolled');
        } else {
            mainNav.classList.remove('scrolled');
        }
    });

    // Toggle mobile menu
    function toggleMobileMenu() {
        if (mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.remove('hidden');
            mobileMenuNav.classList.add('slide-in');
            mobileMenuNav.classList.remove('slide-out');
        } else {
            mobileMenuNav.classList.add('slide-out');
            mobileMenuNav.classList.remove('slide-in');
            setTimeout(() => {
                mobileMenu.classList.add('hidden');
            }, 300);
        }
    }

    menuToggle.addEventListener('click', toggleMobileMenu);
    closeMenu.addEventListener('click', toggleMobileMenu);

    // Close mobile menu when clicking outside
    mobileMenu.addEventListener('click', (e) => {
        if (e.target === mobileMenu) {
            toggleMobileMenu();
        }
    });

    // Close mobile menu when clicking on a menu item
    const mobileMenuItems = mobileMenu.querySelectorAll('a');
    mobileMenuItems.forEach(item => {
        item.addEventListener('click', toggleMobileMenu);
    });
});