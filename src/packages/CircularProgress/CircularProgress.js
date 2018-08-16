import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './circular-progress.css';

const CircularProgress = ({ size, center }) => {
    const circularProgress = (
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

    if (center) {
        return <div className="d2ui-loader-overlay">{circularProgress}</div>;
    }

    return circularProgress;
};

CircularProgress.propTypes = {
    size: PropTypes.oneOf(['large', 'medium', 'small']),
    center: PropTypes.bool,
};

CircularProgress.defaultProps = {
    size: 'medium',
};

export default CircularProgress;
