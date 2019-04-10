import { FETCH_ALL_POSTS } from './../constants/index';
import {  createAction } from 'redux-actions';

const urlPath = 'https://challenge-n12.herokuapp.com/api/v1/public/posts'

const apiFetchPosts = () => fetch(urlPath).then (data => data.json() );


const fetchAllPost = createAction( FETCH_ALL_POSTS, apiFetchPosts ) ;
 
export default  fetchAllPost ;