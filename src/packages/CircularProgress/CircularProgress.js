import React from 'react';
import PropTypes from 'prop-types';
import './circular-progress.css';

const CircularProgress = ({ progress, color, height }) => (
    <h1>
        Progress (circular): {progress} Color: {color} Height: {height}
    </h1>
);

CircularProgress.propTypes = {
    progress: PropTypes.number,
    color: PropTypes.string,
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default CircularProgress;
