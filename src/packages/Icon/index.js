import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './icon.css';

const Icon = ({ name, className, style }) => (
    <i className={classNames('material-icons', className)} style={style}>
        {name}
    </i>
);

Icon.propTypes = {
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
    style: PropTypes.object,
};

export default Icon;
