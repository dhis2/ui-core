/** @format */

import React from 'react'
import PropTypes from 'prop-types'
import { wrapTextNodesInSpans } from '../../utils'
import s from './styles'

function Button({
    role,
    type,
    size,
    kind,
    title,
    disabled,
    onClick,
    onDoubleClick,
    children,
}) {
    return (
        <button
            role={role}
            type={type}
            title={title}
            disabled={disabled}
            onClick={onClick}
            onDoubleClick={onDoubleClick}
            className={s('button', 'align-icon', kind, size)}
        >
            {wrapTextNodesInSpans(children)}
        </button>
    )
}

Button.propTypes = {
    role: PropTypes.string,
    type: PropTypes.oneOf(['submit', 'reset', 'button']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    kind: PropTypes.oneOf(['flat', 'raised', 'primary', 'outlined', 'circle']),
    title: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    onDoubleClick: PropTypes.func,
    children: PropTypes.node.isRequired,
}

Button.defaultProps = {
    role: 'button',
    type: 'button',
    size: 'medium',
    kind: 'raised',
    title: '',
    disabled: false,
    onClick: undefined,
    onDoubleClick: undefined,
}

export { Button }
export default Button
