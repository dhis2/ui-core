import React from 'react';
import PropTypes from 'prop-types';
import './icon.css';

const Icon = ({ name, ...rest }) => (
    <i className="material-icons" {...rest}>
        {name}
    </i>
);

Icon.propTypes = {
    name: PropTypes.string.isRequired,
};

export default Icon;
