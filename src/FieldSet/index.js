import React from 'react'
import propTypes from 'prop-types'
import cx from 'classnames'
import styles from './styles'

const FieldSet = ({ className, children, label }) => (
    <fieldset className={cx(className)}>
        {label && <legend>{label}</legend>}
        <div>{children}</div>
        <style jsx>{styles}</style>
    </fieldset>
)

FieldSet.propTypes = {
    className: propTypes.string,
    children: propTypes.arrayOf(propTypes.element).isRequired,
    label: propTypes.string,
}

export { FieldSet }
