import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './paper.css';

const Paper = ({ elevation, children, padded, className, style }) => (
    <div
        className={classNames('d2ui-paper', className, `elevation-${elevation}dp`, {
            padded: padded,
        })}
        style={style}
    >
        {children}
    </div>
);

Paper.propTypes = {
    elevation: PropTypes.oneOf([0, 1, 2, 3, 4, 6, 12, 24]),
    className: PropTypes.string,
    padded: PropTypes.bool,
    children: PropTypes.node,
    style: PropTypes.object,
};

Paper.defaultProps = {
    elevation: 1,
    padded: false,
};

export default Paper;
