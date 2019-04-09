import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import {  connect } from 'react-redux';
import AppFrame from './../components/AppFrame';
import  PostsList  from './../components/PostsList';
import  PostActions  from './../components/PostActions';
import { fetchAllPost } from './../actions/fetchAllPost';



const posts = [
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

] ;



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
                  body= {this.renderBody(posts)} ></AppFrame>
            </div>
        );
    }
}

AllPostsContainer.propTypes = {
  fetchAllPost: PropTypes.func.isRequired, 
  
 };

const mapDispatchToProps = dispatch => (
  {
    fetchAllPost: () => dispatch( fetchAllPost() )
  }
)


export default withRouter( connect(null, mapDispatchToProps)( AllPostsContainer));