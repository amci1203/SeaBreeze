import $ from 'jquery';

import Menu         from './modules/Menu';
import Modal        from './modules/Modal';
import Gallery      from './modules/Gallery';
import Injector     from './modules/Injector';
import ScrollSpy    from './modules/ScrollSpy';
import StickyHeader from './modules/StickyHeader';
import ScrollReveal from './modules/RevealOnScroll';

const views     = 'views',
      findView  = string => `${views}/${string}.html`;

$(document).ready(Injector.bind(window, initModules))

function initModules () {
    Menu();
    ScrollSpy();
    StickyHeader();
    Gallery('testimonial-slides', 'slide', true, true, 5);
    ScrollReveal('.feature-item', '65%');
    ScrollReveal('.photo', '60%', false);
}
