import { FETCH_ALL_POSTS } from './../constants/index';
import {  createAction} from 'redux-actions';

const posts= [
    {
       "images": [
          "https://source.unsplash.com/FO7JIlwjOtU/1200x800"
        ],
        "isPrivate": true,
        "_id": "5ca649043bba134c01f4e422",
        "title": "Título Post Tecnología",
        "text": "Este es el texto de un post público que trata de Gadgets y Tecnología",
        "status": "Published",
        "publish_date": "2019-04-04T18:00:00.000Z"
    },
    {
        "images": [
          "https://source.unsplash.com/PHIgYUGQPvU/1200x800"
        ],
        "isPrivate": false,
        "_id": "5ca6526d3bba134c01f4e423",
        "title": "Título Post Tecnología",
        "text": "Este Artículo se trata de Salud y Ejercicio",
        "status": "Published",
        "publish_date": "2019-04-05T18:00:00.000Z"
      }
    ]


export const fetchAllPost = createAction(  FETCH_ALL_POSTS, () => posts);
    