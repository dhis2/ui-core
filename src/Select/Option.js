import React from 'react'
import propTypes from 'prop-types'
import cx from 'classnames'
import styles from './Option.styles.js'

const createOnClickHandler = (onClick, value) => evt => {
    if (onClick) {
        evt.preventDefault()
        evt.stopPropagation()
        onClick(value)
    }
}

const Option = ({ value, label, icon, active, disabled, dense, onClick }) => {
    const isClickable = onClick
    const LinkElement = isClickable ? 'a' : 'span'
    const linkElementProps = {}

    if (isClickable) {
        linkElementProps.onClick = createOnClickHandler(onClick, value)
    }

    return (
        <li
            className={cx({
                disabled,
                dense,
                active,
            })}
        >
            <LinkElement className="link" {...linkElementProps}>
                {icon}
                <div className="label">{label}</div>
            </LinkElement>

            <style jsx>{styles}</style>
        </li>
    )
}

Option.propTypes = {
    label: propTypes.oneOfType([propTypes.string, propTypes.node]).isRequired,

    value: propTypes.string,
    href: propTypes.string,
    onClick: propTypes.func,

    className: propTypes.string,
    icon: propTypes.element,

    dense: propTypes.bool,
    active: propTypes.bool,
    disabled: propTypes.bool,
}

export { Option }
