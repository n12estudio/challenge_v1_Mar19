import React from 'react';
import PropTypes from 'prop-types';



const PostListItem = ({title}) => {
    return (
        <div>
            <div className = "post-list-item">
                <div className = "field" >

                    <h1>Artículo del Post Seleccionado: {title} </h1>
                    
                </div>

            </div>
            
        </div>
    );
};

PostListItem.propTypes = {
    title: PropTypes.string.isRequired,
   
};

export default PostListItem;