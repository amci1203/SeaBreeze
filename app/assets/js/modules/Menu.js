import $ from 'jquery';
import _ from '../vendor/lodash.min';

import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

export default function Menu () {
    const
        icon     = $('.menu-toggle'),
        buttons  = $('.mobile-buttons'),
        content  = $('.primary-nav'),
        interval = 100,
        links    = content.find('a');
    let
        prevScroll    = 0,
        consecutives  = 0,
        prevDirection = 'down';

    function toggleMenu () {
        $('html').toggleClass('scroll-lock');
        icon.toggleClass('menu-toggle--close');
        content.toggleClass('primary-nav--open');
    }

    function closeMenu () {
        const targetClass = 'primary-nav--open';
        if (content.hasClass(targetClass)) toggleMenu();
    }

    function handleScroll (event) {
        const scroll    = $(window).scrollTop(),
              direction =  scroll > prevScroll ? 'down' : 'up';
        if (direction == prevDirection) {
            consecutives++;
        } else consecutives = 0;
        if (consecutives == 3) {
            if (direction === 'up') {
                buttons.addClass('visible');
            } else {
                buttons.removeClass('visible');
            }
        } else prevDirection = direction;

        prevScroll = scroll;
    }

    function setWaypoint () {
        new Waypoint({
            element : document.getElementById('footer'),
            handler : dir => {
                document.getElementById('menu-toggle').classList.toggle('sticky')
            }
        })
    }

    return (function () {
        setWaypoint();
        icon.click(toggleMenu);
        links.click(closeMenu);
        $(window).scroll(_.throttle(handleScroll, interval));
    })()
}
