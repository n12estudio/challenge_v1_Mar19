
const apiGet = ( urlGetPost ) => fetch(urlGetPost).then( p => p.json() );

export default apiGet ;