import React, { Children, cloneElement } from 'react'
import propTypes from 'prop-types'
import cx from 'classnames'
import { statusPropType } from '../common-prop-types'
import styles from './styles'

const FieldSet = ({
    className,
    children,
    stacked,
    label,
    valid,
    warning,
    error,
    required,
}) => (
    <fieldset className={cx(className)}>
        {label && (
            <legend className={cx({ valid, warning, error, required })}>
                {label}
            </legend>
        )}
        <div className={cx({ stacked })}>
            {Children.map(children, child =>
                cloneElement(child, {
                    className: cx(child.props.className, 'fieldset-input'),
                    valid,
                    warning,
                    error,
                })
            )}
        </div>
        <style jsx>{styles}</style>
    </fieldset>
)

FieldSet.propTypes = {
    className: propTypes.string,
    children: propTypes.arrayOf(propTypes.element).isRequired,
    stacked: propTypes.bool,
    label: propTypes.string,
    required: propTypes.bool,
    valid: statusPropType,
    warning: statusPropType,
    error: statusPropType,
}

export { FieldSet }
