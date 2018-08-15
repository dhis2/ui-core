import React from 'react';
import PropTypes from 'prop-types';
import './circular-progress.css';

const CircularProgress = ({ color, size, strokeWidth, overlay, overlayFill }) => {
    const wrapperStyle = { width: size, height: size };
    const spinnerLayerStyle = { borderColor: color };
    const circleStyle = { borderWidth: strokeWidth };

    const circularProgress = (
        <div className="d2ui-circular-progress" style={wrapperStyle}>
            <div className="spinner-layer" style={spinnerLayerStyle}>
                <div className="circle-clipper left">
                    <div className="circle" style={circleStyle} />
                </div>
                <div className="gap-patch">
                    <div className="circle" />
                </div>
                <div className="circle-clipper right">
                    <div className="circle" style={circleStyle} />
                </div>
            </div>
        </div>
    );

    if (overlay) {
        return (
            <div className="d2ui-loader-overlay">
                {overlayFill && (
                    <div className="backdrop" style={{ backgroundColor: overlayFill }} />
                )}
                {circularProgress}
            </div>
        );
    }

    return circularProgress;
};

CircularProgress.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    strokeWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    overlay: PropTypes.bool,
    // Best use a RGBA color
    overlayFill: PropTypes.string,
};

CircularProgress.defaultProps = {
    color: '#1976D2',
    size: 50,
    strokeWidth: 3,
};

export default CircularProgress;
