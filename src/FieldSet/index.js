import React, { Children, cloneElement } from 'react'
import propTypes from 'prop-types'
import cx from 'classnames'
import { instanceOfComponent } from '@dhis2/prop-types'
import { Radio } from '../Radio'
import { Switch } from '../Switch'
import { Checkbox } from '../Checkbox'
import styles from './styles'

const FieldSet = ({ className, children, stacked, label }) => (
    <fieldset className={cx(className)}>
        {label && <legend>{label}</legend>}
        <div className={cx({ stacked })}>
            {Children.map(children, child =>
                cloneElement(child, {
                    className: cx(child.props.className, 'fieldset-input'),
                })
            )}
        </div>
        <style jsx>{styles}</style>
    </fieldset>
)

FieldSet.propTypes = {
    className: propTypes.string,
    children: propTypes.oneOfType([
        propTypes.arrayOf(instanceOfComponent(Radio)),
        propTypes.arrayOf(instanceOfComponent(Checkbox)),
        propTypes.arrayOf(instanceOfComponent(Switch)),
    ]),
    stacked: propTypes.bool,
    label: propTypes.string,
}

export { FieldSet }
