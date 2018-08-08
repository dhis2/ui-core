import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './icon.css';

const Icon = ({ name, className, ...rest }) => (
    <i className={classNames('material-icons', className)} {...rest}>
        {name}
    </i>
);

Icon.propTypes = {
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
};

export default Icon;
