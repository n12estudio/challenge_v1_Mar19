import { FETCH_ALL_POSTS } from './../constants/index';
import {  createAction} from 'redux-actions';

export const fetchAllPost = createAction(  FETCH_ALL_POSTS );
    