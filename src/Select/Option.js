import React from 'react'
import propTypes from 'prop-types'
import cx from 'classnames'
import styles from './Option.styles.js'

const createOnClickHandler = (onClick, option) => evt => {
    evt.preventDefault()
    evt.stopPropagation()
    onClick(option)
}

const Option = ({ value, label, active, disabled, dense, onClick }) => {
    const handleClicks = createOnClickHandler(onClick, { value, label })

    return (
        <li
            className={cx({
                disabled,
                dense,
                active,
            })}
        >
            <a className="link" onClick={handleClicks}>
                <div className="label">{label}</div>
            </a>

            <style jsx>{styles}</style>
        </li>
    )
}

Option.propTypes = {
    label: propTypes.string.isRequired,
    value: propTypes.string.isRequired,
    onClick: propTypes.func.isRequired,
    dense: propTypes.bool,
    active: propTypes.bool,
    disabled: propTypes.bool,
}

export { Option }
