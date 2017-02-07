import $      from 'jquery';
import smooth from 'jquery-smooth-scroll';

const pageSections = $('.page-section'),
      lazyImages   = $('.lazyload'),
      links        = $('.primary-nav a');

links.smooth();

function sectionChange (direction, targetDirection) {
    if (direction == targetDirction) {
        const targetLink = `_${this.element.id}`;
        console.log(targetLink);
        links.removeClass('current-link');
        document.getElementById(targetLink).classList.add('current-link');
    }
}

pageSections.each(function () {
    let currentSection = this;
    new Waypoint({
        element : currentSection,
        offset  : '18%',
        handler : sectionChange(direction, 'down')
    })
    new Waypoint({
        element : currentSection,
        offset  : '-40%',
        handler : sectionChange(direction, 'up')
    })
})

lazyImages.load(() => Waypoint.refreshAll());

console.log('DONE');
