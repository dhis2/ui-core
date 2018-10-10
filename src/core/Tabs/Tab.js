import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../Icon'
import s from './styles'

function Tab({
    icon,
    label,
    onClick,
    active,
    disabled,
    stacked,
    addTabRef,
    children,
}) {
    return (
        <button
            className={s('tab', 'align-icon', { active, disabled, stacked })}
            onClick={onClick}
            ref={addTabRef}
        >
            {children
                ? children
                : (icon && <Icon name={icon} />, label && <span>{label}</span>)}
        </button>
    )
}

Tab.propTypes = {
    label: PropTypes.string,
    icon: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    addTabRef: PropTypes.func,
    active: PropTypes.bool,
    disabled: PropTypes.bool,
    stacked: PropTypes.bool,
    children: PropTypes.node,
}

Tab.defaultProps = {
    active: false,
    disabled: false,
    stacked: false,
}

export { Tab }
export default Tab
