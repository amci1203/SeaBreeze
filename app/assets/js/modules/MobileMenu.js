import $ from 'jquery';

export default function MobileMenu () {
    const icon    = $('.menu-toggle'),
          content = $('.primary-nav'),
          links   = content.find('a');

    function toggleMenu () {
        $('html').toggleClass('scroll-lock');
        icon.toggleClass('menu-toggle--close');
        content.toggleClass('primary-nav--open');
    }

    function closeMenu () {
        const targetClass = 'primary-nav--open';
        if (content.hasClass(targetClass)) toggleMenu();
    }

    return (function () {
        icon.click(toggleMenu)
        links.click(closeMenu)
    })()
}
