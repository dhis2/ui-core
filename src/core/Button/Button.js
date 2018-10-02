/** @format */

import React from 'react'
import PropTypes from 'prop-types'
import { wrapTextNodesInSpans } from '../../utils'
import s from './styles'

const Button = ({
    children,
    disabled,
    onClick,
    onDoubleClick,
    role,
    size,
    title,
    type,
    kind,
}) => (
    <button
        className={s('button', 'align-icon', kind, size)}
        {...{ disabled, onClick, onDoubleClick, title, type, role }}
    >
        {wrapTextNodesInSpans(children)}
    </button>
)

Button.propTypes = {
    children: PropTypes.node.isRequired,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    onDoubleClick: PropTypes.func,
    role: PropTypes.string,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    title: PropTypes.string,
    type: PropTypes.oneOf(['submit', 'reset', 'button']),
    kind: PropTypes.oneOf(['flat', 'raised', 'primary', 'outlined', 'circle']),
}

Button.defaultProps = {
    type: 'button',
    size: 'medium',
    kind: 'raised',
}

export { Button }
export default Button
