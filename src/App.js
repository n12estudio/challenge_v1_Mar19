import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import HomeContainer from './containers/HomeContainer';


class App extends Component {
  renderHome = () => <h1>Home Container = Contenedor de todos los posts.</h1> ;
  renderAllPostsContainer= () => <h1>Contenedor de todos los posts </h1>
  renderPublicPostContainer = () => <h1> contenedor de un post publico. </h1> ;
  renderPrivatePostContainer = () => <h1> Contenedor de un post privado. </h1>


  render() {
    return (
      <Router>
        <div className="App">

        <Route exact path="/" component= {HomeContainer} />
        <Route exact path= "/public/post" component={this.renderAllPostsContainer} />
        <Route exact path= "/public/post/:idPost" component={this.renderPublicPostContainer} />
        <Route exact path="/posts/:idPostPrivate" component={this.renderPrivatePostContainer} />
                
        </div>
      </Router>

    );
  }
}

export default App;
