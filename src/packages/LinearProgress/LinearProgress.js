import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './linear-progress.css';

const LinearProgress = ({ progress, padded }) => {
    const innerClass = typeof progress === 'undefined' ? 'indeterminate' : 'determinate';
    const progressStyle = progress ? { width: `${progress}%` } : null;

    return (
        <div className={classNames('d2ui-linear-progress', { padded: padded })}>
            <div className={innerClass} style={progressStyle} />
        </div>
    );
};

LinearProgress.propTypes = {
    progress: PropTypes.number,
    padded: PropTypes.bool,
};

export default LinearProgress;
