import * as actionTypes from './actionTypes';

export const setLightBoxImages = (images) => {
    return {
        type: actionTypes.SET_LIGHTBOX_IMAGES,
        images
    }
}

export const showLightBox = (image, index) => {
    return {
        type: actionTypes.SHOW_LIGHTBOX,
        currentImage: image,
        currentIndex: index,
        showLightBox: true,
    }
}

export const closeLightBox = () => {
    return {
        type: actionTypes.CLOSE_LIGHTBOX,
        showLightBox: false,
    }
}

export const nextLightBoxImage = (image, index) => {
    console.log('Inside nextlightbox')
    return {
        type: actionTypes.NEXT_LIGHTBOX_IMAGE,
        currentImage: image,
        currentIndex: index
    }
}

export const previousLightBoxImage = (image, index) => {
    return {
        type: actionTypes.PREVIOUS_LIGHTBOX_IMAGE,
        currentImage: image,
        currentIndex: index
    }
}

