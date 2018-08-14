import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './paper.css';

const Paper = ({ elevation, children, padded }) => (
    <div
        className={classNames('d2ui-paper', `elevation-${elevation}dp`, {
            padded: padded,
        })}
    >
        {children}
    </div>
);

Paper.propTypes = {
    elevation: PropTypes.oneOf([0, 1, 2, 3, 4, 6, 12, 24]),
    padded: PropTypes.bool,
    children: PropTypes.node,
};

Paper.defaultProps = {
    elevation: 1,
    padded: false,
};

export default Paper;
