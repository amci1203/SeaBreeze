import $ from 'jquery';

export default function MobileMenu () {
    icon    = $('.menu-toggle');
    content = $('.primary-nav');
    
    toggleMenu () {
        icon.toggleClass('menu-toggle--close');
        content.toggleClass('primary-nav--open');
    }
    
    return (function () {
        icon.click(toggleMenu)
    })()
}
