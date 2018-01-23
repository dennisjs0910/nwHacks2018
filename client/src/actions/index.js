import axios from 'axios';
import { FETCH_USER, GET_TWITTER_TIMELINE } from './types';

export const fetchUser = () => {
    return function(dispatch) {
        axios.get('/api/current_user').then((res) => {
            dispatch({ type: FETCH_USER, payload: res.data });
        });
    }
};

export const fetchTwitterTimeLine = () => {
    return (dispatch) => {
        axios.get('/api/twitter/timeline').then((res) => {
            dispatch({ 
                type: GET_TWITTER_TIMELINE,
                payload: res.data
            })
        });
    }
};