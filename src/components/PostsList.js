import React from 'react';
import PropTypes from 'prop-types';
import PostListItem from './PostListItem';


const PostsList =  ({ posts }) => {
    return (
            
            <div className="posts-list">
            {
             posts = posts.map( apts => 
                    <PostListItem
                    key={apts._id}
                    title={apts.title} 
                    _id={apts._id}
                    images= {apts.images}                
                    isPrivate = {apts.isPrivate}
                    publish_date= {apts.publish_date}
                    text={apts.text}   
                    status = {apts.status}        
                    ></PostListItem> )
                    
            }
            </div>
      
    );
};

PostsList.propTypes = {


};

export default PostsList;