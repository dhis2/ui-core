import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as VARIANTS from './variants';
import Tooltip from '../Tooltip';
import { wrapTextNodesInSpans } from '../../utils';
import './button.css';

const Button = ({
    children,
    className,
    disabled,
    onClick,
    onDoubleClick,
    role,
    size,
    style,
    title,
    tooltip,
    tooltipProps,
    type,
    variant,
}) => {
    const button = (
        <button
            className={classNames('d2ui-button', className, variant, size)}
            {...{ disabled, onClick, onDoubleClick, title, type, role, style }}
            {...tooltipProps}
        >
            {wrapTextNodesInSpans(children)}
        </button>
    );

    if (tooltip) {
        return <Tooltip text={tooltip}>{button}</Tooltip>;
    }

    return button;
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    onDoubleClick: PropTypes.func,
    role: PropTypes.string,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    style: PropTypes.object,
    title: PropTypes.string,
    tooltip: PropTypes.string,
    tooltipProps: PropTypes.object,
    type: PropTypes.oneOf(['submit', 'reset', 'button']),
    variant: PropTypes.oneOf(Object.keys(VARIANTS).map(key => VARIANTS[key])),
};

Button.defaultProps = {
    type: 'button',
    size: 'medium',
    variant: VARIANTS.RAISED,
};

export default Button;
