import { handleActions } from 'redux-actions';
import { FETCH_ALL_POSTS } from './../constants/index';

const posts = handleActions({
    [FETCH_ALL_POSTS]: state  => state,
}, {} );

export default posts ;