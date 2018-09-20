import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import './chip.css';
import { bemClassNames } from '../utils';

const bem = bemClassNames('d2ui-chip');

const Chip = ({
    label,
    variant,
    onClick,
    onRemoveClick,
    icon,
    selected,
    disabled,
    dragging,
}) => {
    const mainClassName = bem.b(variant, {
        static: !onClick,
        'with-icon': Boolean(icon),
        'with-delete-icon': Boolean(onRemoveClick),
        selected,
        disabled,
        dragging,
    });
    const clickProps = onClick ? { onClick } : null;

    return (
        <div className={mainClassName} {...clickProps}>
            {icon && <Icon name={icon} className={bem.e('icon')} />}
            <span className={bem.e('label')}>{label}</span>
            {onRemoveClick && (
                <button className={bem.e('remove-button')} onClick={onRemoveClick}>
                    <Icon name="close" className={bem.e('remove-icon')} />
                </button>
            )}
        </div>
    );
};

Chip.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    onRemoveClick: PropTypes.func,
    icon: PropTypes.string,
    selected: PropTypes.bool,
    disabled: PropTypes.bool,
    dragging: PropTypes.bool,
};

export default Chip;
