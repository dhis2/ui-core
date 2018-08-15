import React from 'react';
import PropTypes from 'prop-types';
import './linear-progress.css';

const LinearProgress = ({ progress, backgroundColor, progressColor, height }) => {
    const outerStyle = { backgroundColor, height };
    const innerClass = typeof progress === 'undefined' ? 'indeterminate' : 'determinate';
    const innerStyle = { backgroundColor: progressColor };

    if (progress) {
        innerStyle.width = `${progress * 100}%`;
    }

    return (
        <div class="d2ui-linear-progress" style={outerStyle}>
            <div class={innerClass} style={innerStyle} />
        </div>
    );
};

LinearProgress.propTypes = {
    progress: PropTypes.number,
    backgroundColor: PropTypes.string,
    progressColor: PropTypes.string,
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

LinearProgress.defaultProps = {
    backgroundColor: '#EAF4FF',
    progressColor: '#1976D2',
    height: 4,
};

export default LinearProgress;
