import { FETCH_ALL_POSTS } from './../constants/index';
import {  createAction} from 'redux-actions';
import { apiGet } from './../api';
import { urlPosts } from '../api/url';


export const fetchAllPost = createAction(  FETCH_ALL_POSTS, apiGet(urlPosts));
    