// const apiFetchPosts = () => fetch(urlPath).then (data => data.json() );



const apiGet = ( urlPath ) => () => fetch(urlPath).then( data => data.json() );

export default apiGet ;
