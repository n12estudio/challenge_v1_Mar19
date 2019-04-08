import React from 'react';
import PropTypes from 'prop-types';
import PostListItem from './PostListItem';


const PostsList =  ({ posts }) => {
    return (
            
            <div className="posts-list">
            {
             posts = posts.map( apts => 
                    <PostListItem
                    key={apts.id}
                    title={apts.title} 
                    id={apts.id}
                    images= {apts.images}                
                    isPrivate = {apts.isPrivate}
                    publish_date= {apts.publish_date}
                                
                    ></PostListItem> )
                    
            }
            </div>
      
    );
};

PostsList.propTypes = {


};

export default PostsList;