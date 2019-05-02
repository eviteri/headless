import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    items: null,
    loading: false,
    error: null,
    isOpen: false
}

const fetchMenuStart = (state, action) => {
    return updateObject(state, {
        loading: true,
    })
}

const fetchMenuSuccess = (state, action) => {
    return updateObject(state, {
        items: action.items,
        loading: false,
    })
}

const fetchMenuFail = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: action.error
    });
}

const toggleMenu = (state, action) => {
    return updateObject(state, {
        isOpen: action.isOpen
    });
}


const reducer = (state = initialState, action) => {
    switch (action.type){
        case actionTypes.FETCH_MENU_START: return fetchMenuStart(state, action);
        case actionTypes.FETCH_MENU_SUCCESS: return fetchMenuSuccess(state, action);
        case actionTypes.FETCH_MENU_FAIL: return fetchMenuFail(state, action);
        case actionTypes.TOGGLE_MENU: return toggleMenu(state, action);
        
        default: return state;
    }
};

export default reducer; 