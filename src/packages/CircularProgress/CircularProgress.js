import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './circular-progress.css';

const CircularProgress = ({ size }) => (
    <div className={classNames('d2ui-circular-progress', size)}>
        <div className="spinner-layer">
            <div className="circle-clipper left">
                <div className="circle" />
            </div>
            <div className="gap-patch">
                <div className="circle" />
            </div>
            <div className="circle-clipper right">
                <div className="circle" />
            </div>
        </div>
    </div>
);

CircularProgress.propTypes = {
    size: PropTypes.oneOf(['large', 'medium', 'small']),
};

CircularProgress.defaultProps = {
    size: 'medium',
};

export default CircularProgress;
