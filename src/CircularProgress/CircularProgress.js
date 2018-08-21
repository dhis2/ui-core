import React from 'react';
import PropTypes from 'prop-types';
import { bemClassNames } from '../utils';
import './circular-progress.css';

const bem = bemClassNames('d2ui-circular-progress');

const CircularProgress = ({ size, center }) => {
    const circularProgress = (
        <div className={bem.b(size)}>
            <div className={bem.e('spinner-layer')}>
                <div className={bem.e('circle-clipper', 'left')}>
                    <div className={bem.e('circle')} />
                </div>
                <div className={bem.e('gap-patch')}>
                    <div className={bem.e('circle')} />
                </div>
                <div className={bem.e('circle-clipper', 'right')}>
                    <div className={bem.e('circle')} />
                </div>
            </div>
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
