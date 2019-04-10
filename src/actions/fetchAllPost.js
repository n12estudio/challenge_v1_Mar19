import { FETCH_ALL_POSTS } from './../constants/index';
import {  createAction } from 'redux-actions';
import apiGet from './../api/index';
import urlGetPosts from './../api/url';


const fetchAllPost = createAction( FETCH_ALL_POSTS, apiGet(urlGetPosts) ) ;
 
export default  fetchAllPost ;