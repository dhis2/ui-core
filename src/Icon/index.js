import React from 'react';
import PropTypes from 'prop-types';
import './icon.css';

const Icon = ({ name, className }) => (
    <i className={`material-icons ${className ? ' ' + className : ''}`}>{name}</i>
);

Icon.propTypes = {
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
};

export default Icon;
