import $ from 'jquery';

import slide from '../helpers/slide';

export default function Gallery (_selector, _transitionType, _alwaysOpen, _autoplay, _interval) {
    const
        interval         = _interval || 5,
        selector         = _selector.trim(),
        validTransition  = ['slide', 'zoom'].indexOf(_transitionType) != -1,
        transition       = validTransition ?  _transitionType : 'slide',
        gallery          = $(`#${selector}`),
        images           = gallery.find('.gallery__image'),
        numImages        = images.length,
        prev             = gallery.find('.prev'),
        next             = gallery.find('.next'),
        playButton       = gallery.find('.toggle-play'),
        close            = gallery.find('.gallery--close'),
        totalImagesView  = gallery.find('#total-images'),
        currentImageView = gallery.find('#current-image');
    let
        playing          = _autoplay || false,
        isOpen           = _alwaysOpen || false,
        currentImage     = 0;

    function init () {
        totalImagesView.html(numImages);
        if (_alwaysOpen) {
            gallery.addClass('gallery--always-open');
            images.eq(0).addClass('active');
        }
        images.each((i, elm) => elm.setAttribute('data-index', i))
    }

    function openSlideshowView (event) {
        if (gallery.hasClass('gallery--slide-view')) return false;
        else {
            event.currentTarget.classList.add('active');
            currentImage = +event.currentTarget.getAttribute('data-index');
            currentImageView.html(currentImage + 1);
            gallery.toggleClass('gallery--slide-view');
            
            isOpen = true;
        }
    }

    function closeSlideshowView () {
        images.removeClass('active');
        gallery.removeClass('gallery--slide-view');
        
        isOpen = false;
    }

    function slideGallery (direction) {
        slide(images, currentImage, numImages, direction, transition, newIndex => {
            currentImage = newIndex;
            if (currentImageView) currentImageView.html(newIndex + 1);
        })
    }

    function togglePlay () {
        const isPlaying = playing ? true : false;
        playing = isPlaying;
    }
    
    function play () {
        if (isOpen && playing) {
            setInterval(slideGallery.bind(null, 'right'), interval * 1000);
        }
    }

    function handleKeyPress (event) {
        if (!gallery.hasClass('gallery--slide-view')) return false;
        else {
            const keyCode = event.keyCode;
            if ([37, 39].indexOf(keyCode) !== -1) {
                const direction = keyCode === 37 ? 'left' : 'right';
                slideGallery(direction);
            } else if (keyCode === 27) {
                closeSlideshowView();
            } else return false
        }
    }

    return (() => {
        init();

        if (_alwaysOpen) {
            if (_autoplay) play();
        }
        else {
            $(document).keyup(handleKeyPress)
            images.click(openSlideshowView)
            close.click(closeSlideshowView);
        }
        prev.click(slideGallery.bind(null, 'left'))
        next.click(slideGallery.bind(null, 'right'))
    })()
}
