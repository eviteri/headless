import axios from '../../axios';
import * as actionTypes from './actionTypes';

export const fetchPageStart = () => {
    return {
        type: actionTypes.FETCH_PAGE_START
    }
}

export const fetchPageSuccess = (content) => {
    return {
        type: actionTypes.FETCH_PAGE_SUCCESS,
        slug: content.slug,
        content: content
    }
}

export const fetchPageFail = (error) => {
    return {
        type: actionTypes.FETCH_PAGE_FAIL,
        error: error
    }
}

export const getPage = (slug) => {
    return dispatch => {
        dispatch(fetchPageStart());
        const url = 'http://rest.eviteri.com/wp-json/wp/v2/pages?slug=' + slug;
        
        axios.get(url)
            .then(response => {
                //console.log(response.data[0]);
                if(response.data.length > 0){
                    dispatch(fetchPageSuccess(response.data[0]))
                }else{
                    dispatch(fetchPageFail('Cannot read property slug of undefined'));
                }
                
            })
            .catch(err => {
                console.log(err);
                //dispatch(fetchPageFail(err.response.data.error));
            })
    }
}