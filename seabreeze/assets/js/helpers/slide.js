import $ from 'jquery';

export default function slide (images, currentImage, numImages, direction, transition, cb) {
//    images.not((i, elm) => i == elm.getAttribute('data-index')).removeClass('active');
    const
        zooms    = transition != 'slide',
        interval = zooms ? 1500 : 500;
    let
        newCurrent    = '',
        newAnimateCls = '',
        oldAnimateCls = '';
    if (zooms) {
        newAnimateCls = 'zoom-out';
        oldAnimateCls = 'zoom-in';
    }
    if (direction == 'right') {
        if (!zooms) {
            newAnimateCls = 'slide-left-in';
            oldAnimateCls = 'slide-left-out';
        }
        const to = numImages - 1 === currentImage ? 0 : currentImage + 1;
        newCurrent = to;
        images.eq(to).addClass(`active ${newAnimateCls}`)
        images.eq(currentImage).addClass(oldAnimateCls);
    } 
    else if (direction == 'left') {
        if (!zooms) {
            newAnimateCls = 'slide-right-in';
            oldAnimateCls = 'slide-right-out';
        }
        const to = currentImage === 0 ? numImages - 1 : currentImage - 1;
        newCurrent = to;
        images.eq(to).addClass(`active ${newAnimateCls}`)
        images.eq(currentImage).addClass(oldAnimateCls);
    }

    setTimeout(() => {
        images.eq(newCurrent).removeClass(newAnimateCls);
        images.eq(currentImage).removeClass(`active ${oldAnimateCls}`);
        
        cb(newCurrent)
    }, interval)
    
}
