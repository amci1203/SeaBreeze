import $ from 'jquery';
import waypoints from '../../../node_modules/waypoints/lib/noframework.waypoints';

import Modal        from './modules/Modal';
import ScrollReveal from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';
import ScrollSpy    from './modules/ScrollSpy';


$(document).ready(() => {
    StickyHeader()
    ScrollSpy()
})