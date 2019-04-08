import React from 'react';
import PropTypes from 'prop-types';

const PostArticle = ({ title, id, text }) => {
    return (
        <div>
            <h1> Componente con los elementos requeridos para mostrar el artículo</h1>
            <h3> Articulo: {title} / ID: {id} / Contenido: {text} </h3>
        </div>
    );
};

PostArticle.propTypes = {
    title: PropTypes.string,
    id: PropTypes.string,
    text: PropTypes.string,
};

export default PostArticle;