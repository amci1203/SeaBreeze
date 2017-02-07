import $         from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

const header  = $('.primary-nav'),
      trigger = $('#home');

new Waypoint({
    element : trigger,
    handler : () => header.toggleClass('primary-nav--fixed')
})
