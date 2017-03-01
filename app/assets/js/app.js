import $ from 'jquery';

import Menu         from './modules/Menu';
import Modal        from './modules/Modal';
import ScrollSpy    from './modules/ScrollSpy';
import StickyHeader from './modules/StickyHeader';
import ScrollReveal from './modules/RevealOnScroll';


$(document).ready(() => {
    init();
})

function init () {
    Menu();
    ScrollSpy();
    StickyHeader();
    ScrollReveal('.feature-item', '65%');
    ScrollReveal('.photo', '85%', false);
}
