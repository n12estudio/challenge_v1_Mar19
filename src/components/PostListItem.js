import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const PostListItem = ({ title, _id, images, isPrivate, publish_date }) => {
    return (
        <div>
            <div className = "post-list-item">
                <div className = "field" >
                                       
                    <h2>Artículo del post seleccionado: {title} </h2>

                    <div>Número ID: <i>{_id}</i></div>
                    <div>Imagen: <i>{images}</i>
                    <br/>
                    <Link to = '/public/post/:idPost' >Leer más ... {title}.</Link>
                    </div>
                    <div>Disponibilidad del artículo: <i>{isPrivate}</i> </div>
                    <div>Fecha de Publicación:  <i>{publish_date}</i></div>

                </div>

            </div>
            
        </div>
    );
};

PostListItem.propTypes = {
    title: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
    images: PropTypes.element.isRequired,
    isPrivate: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    publish_date: PropTypes.string.isRequired,  
};

export default PostListItem;