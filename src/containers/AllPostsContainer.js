import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import {  connect } from 'react-redux';
import AppFrame from './../components/AppFrame';
import  PostsList  from './../components/PostsList';
import  PostActions  from './../components/PostActions';
import { fetchAllPost } from './../actions/fetchAllPost';

class AllPostsContainer extends Component {

  componentDidMount(){
    this.props.fetchAllPost() ;
  }

  handleOnCLick = () => {
    console.log('handleOnCLick');
    this.props.history.push('/')
  }
    renderBody = posts => (
        <div>
          <PostsList
            posts={posts}
            urlPath={'/public/post'}
          ></PostsList> 

          <PostActions className="post-actions">
            <button onClick={this.handleOnCLick}>Buscar más sobre ...</button>
          </PostActions>
          </div>
    );


    render() {
        return (
            <div>
                <AppFrame header = {'Listado de todos los posteos'}
                  body= {this.renderBody(this.props.posts)} ></AppFrame>
            </div>
        );
    }
}

AllPostsContainer.propTypes = {
  fetchAllPost: PropTypes.func.isRequired,  
  posts: PropTypes.array.isRequired,
 };

 AllPostsContainer.defaultProps = {
    posts: []
 } ;

const mapStateToProps = state => ({
    posts: state.posts
});

export default withRouter( connect( mapStateToProps, {fetchAllPost})( AllPostsContainer));