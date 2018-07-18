import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Tooltip from '../Tooltip';
import { CIRCLE } from './variants';

const CircleButton = ({ label, ...props }) => {
    if (label) {
        return (
            <Tooltip text={label}>
                <Button variant={CIRCLE} {...props} />
            </Tooltip>
        );
    }
    return <Button variant={CIRCLE} {...props} />;
};

CircleButton.propTypes = {
    label: PropTypes.string,
};

export default CircleButton;
