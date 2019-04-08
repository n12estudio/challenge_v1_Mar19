import React from 'react';
import PropTypes from 'prop-types';
import PostListItem from './PostListItem';


const PostsList =  ({ posts, urlPath })=> {
    return (
        
            <div className="posts-list">
            {
                posts.map( p =>
                    <PostListItem                   
                        key={p._id}
                        id={p._id}  
                        images={p.images}
                        title={p.title}
                        urlPath={urlPath}
                    ></PostListItem >)
            }
            </div>
      
    );
};

PostsList.propTypes = {
    posts: PropTypes.array.isRequired,
    urlPath: PropTypes.string.isRequired,
};

export default PostsList;