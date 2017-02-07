import $         from 'jquery';

export default function StickyHeader () {
    const trigger = document.getElementById('primary-nav');
    return (() => {
        new Waypoint({
            element : trigger,
            handler : () => {
                document.body.classList.toggle('sticky-top');
                trigger.classList.toggle('primary-nav--fixed');
            }
        })
    })()
}