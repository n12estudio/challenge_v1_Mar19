
export const apiGet = ( urlPost ) => fetch(urlPost).then( p => p.json() );