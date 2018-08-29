import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import { bemClassNames, noop } from '../utils';
import './tab.css';

const bem = bemClassNames('d2ui-tab');

const Tab = ({
    icon,
    label,
    onClick,
    active,
    disabled,
    stacked,
    addTabRef,
    children,
}) => (
    <button
        className={`${bem.b({ active, disabled, stacked })} d2ui-align-icon`}
        onClick={onClick}
        ref={addTabRef}
    >
        {children
            ? children
            : (icon && <Icon name={icon} />, label && <span>{label}</span>)}
    </button>
);

Tab.propTypes = {
    label: PropTypes.string,
    icon: PropTypes.string,
    onClick: PropTypes.func,
    addTabRef: PropTypes.func,
    active: PropTypes.bool,
    disabled: PropTypes.bool,
    stacked: PropTypes.bool,
    children: PropTypes.node,
};

Tab.defaultProps = {
    active: false,
    disabled: false,
    stacked: false,
    onClick: noop,
};

export default Tab;
