import React from 'react';
import PropTypes from 'prop-types';
import { bemClassNames } from '../../utils';
import './circular-progress.css';

const bem = bemClassNames('d2ui-circular-progress');

const CircularProgress = ({ size, center }) => {
    const circularProgress = (
        <div className={bem(null, size)}>
            <div className={bem('spinner-layer')}>
                <div className={bem('circle-clipper', 'left')}>
                    <div className={bem('circle')} />
                </div>
                <div className={bem('gap-patch')}>
                    <div className={bem('circle')} />
                </div>
                <div className={bem('circle-clipper', 'right')}>
                    <div className={bem('circle')} />
                </div>
            </div>
        </div>
    );

    if (center) {
        return <div className={bem('overlay')}>{circularProgress}</div>;
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
