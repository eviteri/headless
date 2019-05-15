import * as actionTypes from '../actions/actionTypes';

const initialState = {
    images: null,
    currentImage: null,
    currentIndex: null,
    showLightBox: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case actionTypes.RESET_LIGHTBOX_IMAGES: 
            return {
                ...state,
                images: null,
                currentImage: null,
                currentIndex: null,
                showLightBox: false
            };
        case actionTypes.SET_LIGHTBOX_IMAGES: 
            return {
                ...state,
                images: action.images
            };
        case actionTypes.SHOW_LIGHTBOX: 
            return {
                ...state,
                currentImage: action.currentImage,
                currentIndex: action.currentIndex,
                showLightBox: action.showLightBox,

            };
        case actionTypes.CLOSE_LIGHTBOX: 
            return {
                ...state,   
                showLightBox: action.showLightBox,
            };
        case actionTypes.NEXT_LIGHTBOX_IMAGE: 
            return {
                ...state,
                currentImage: action.currentImage,
                currentIndex: action.currentIndex
            };
        case actionTypes.PREVIOUS_LIGHTBOX_IMAGE: 
            return {
                ...state, 
                currentImage: action.currentImage,
                currentIndex: action.currentIndex
            };
        
        default: return state;
    }
};

export default reducer;