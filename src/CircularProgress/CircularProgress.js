import React from 'react';
import PropTypes from 'prop-types';
import { bemClassNames } from '../utils';
import './circular-progress.css';

const bem = bemClassNames('d2ui-circular-progress');

const CircularProgress = ({ size, center }) => {
    const circularProgress = (
        <div role="progressbar" className={bem.b(size)}>
            <svg viewBox="22 22 44 44" className={bem.e('viewbox')}>
                <circle
                    className={bem.e('circle')}
                    cx="44"
                    cy="44"
                    r="20.2"
                    fill="none"
                    stroke-width="3.6"
                />
            </svg>
        </div>
    );

    if (center) {
        return <div className={bem.e('overlay')}>{circularProgress}</div>;
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
