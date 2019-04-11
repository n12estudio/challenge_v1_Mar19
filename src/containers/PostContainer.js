import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AppFrame from  './../components/AppFrame';

class PostContainer extends Component {
    render() {
        return (
            <div>
                <AppFrame header = {`Artículo del Post`}
                    body= {<p>Texto bla bla bla</p>}>

                </AppFrame>
            </div>
        );
    }
}

PostContainer.propTypes = {

};

export default connect(null, null) (PostContainer);