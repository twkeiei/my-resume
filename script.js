const menuToggle = document.querySelector('#menu-toggle');
const siteNav = document.querySelector('.site-nav');

if (menuToggle && siteNav) {
    menuToggle.addEventListener('click', function () {
        siteNav.classList.toggle('open');
        const isOpen = siteNav.classList.contains('open');
        menuToggle.setAttribute('aria-expanded', isOpen);
    });
}