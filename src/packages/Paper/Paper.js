import React from 'react';
import PropTypes from 'prop-types';
import { bemClassNames } from '../../utils';
import './paper.css';

const bem = bemClassNames('d2ui-paper');

const Paper = ({ elevation, children, padded }) => (
    <div
        className={bem('null', `elevation-${elevation}dp`, {
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
