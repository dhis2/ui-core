import React from 'react';
import PropTypes from 'prop-types';
import './linear-progress.css';

const LinearProgress = ({ progress, color, height }) => (
    <h1>
        Progress (linear): {progress} Color: {color} Height: {height}
    </h1>
);

LinearProgress.propTypes = {
    progress: PropTypes.number,
    color: PropTypes.string,
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};
