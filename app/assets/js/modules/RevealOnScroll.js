import $         from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

export default class RevealOnScroll {
    constructor (selector, waypointOffset) {
        this.toReveal = $(selector);
        this.offset   = waypointOffset;
        this.hide();
        this.createWaypoints();
    }

    hide () { this.toReveal.addClass('reveal-item') }

    createWaypoints () {
        let _ = this;
        this.toReveal.each(function () {
            let currentItem = this;
            new Waypoint({
                element : currentItem,
                offset  : _.offset,
                handler : () => $(currentItem).addClass('reveal-item--visible')
            })
        })
    }
}
