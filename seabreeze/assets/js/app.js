import $ from 'jquery';

import Menu         from './modules/Menu';
import Modal        from './modules/Modal';
import Gallery      from './modules/Gallery';
import ScrollSpy    from './modules/ScrollSpy';
import StickyHeader from './modules/StickyHeader';
import ScrollReveal from './modules/RevealOnScroll';

const views     = 'views',
      findView  = string => `${views}/${string}.html`;

$(document).ready(inject.bind(window, initModules))

function inject (callback) {
    const partialViews  = $('._partial'),
          numViews      = partialViews.length;
    let viewsInjected = 0
    partialViews.each(function () {
        const view = findView( $(this).attr('data-view') );
        $.get(view)
        .done(data => {
            $(this).html(data);
        })
        .fail(err => console.error(err))
        .always(() => {
            viewsInjected++;
            if (viewsInjected == numViews) setTimeout(callback, 200);
        })
    })
    
}

function initModules () {
    Menu();
    ScrollSpy();
    StickyHeader();
    Gallery('testimonial-slides', true, true, 5);
    ScrollReveal('.feature-item', '85%');
    ScrollReveal('.photo', '60%', false);
}
