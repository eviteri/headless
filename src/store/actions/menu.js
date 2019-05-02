import axios from '../../axios';
import * as actionTypes from './actionTypes';

export const fetchMenuStart = () => {
    return {
        type: actionTypes.FETCH_MENU_START
    }
}

export const fetchMenuSuccess = (items) => {
    return {
        type: actionTypes.FETCH_MENU_SUCCESS,
        items: items
    }
}

export const fetchMenuFail = (error) => {
    return {
        type: actionTypes.FETCH_MENU_FAIL,
        error: error
    }
}

export const getMenu = () => {
    return dispatch => {
        dispatch(fetchMenuStart());
        const url = '/wp-json/menus/v1/menus/2';
        
        axios.get(url)
            .then(response => {
                dispatch(fetchMenuSuccess(response.data.items))
                
            })
            .catch(err => {
                dispatch(fetchMenuFail(err.response.data.error));
            })
    }
}

export const toggleMenu = (isOpen) => {
    return {
        type: actionTypes.TOGGLE_MENU,
        isOpen: isOpen
    }
}
