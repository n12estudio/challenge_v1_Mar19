import React from 'react';
import PropTypes from 'prop-types';


const PostActions = ({ children }) => {
    return (
        <div>
           <div className= "post-actions">
           <div>{children}</div>
           </div>
        </div>
    );
};

PostActions.propTypes = {
    children:  PropTypes.node.isRequired,
};

export default PostActions;