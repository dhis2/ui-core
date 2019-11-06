import React from 'react'
import propTypes from 'prop-types'
import cx from 'classnames'
import { resolve } from 'styled-jsx/css'
import { colors, spacers } from './theme.js'
import { Checkbox } from './Checkbox.js'

// Padding has to be set on the label, so that the entire area is clickable
const { styles, className: checkboxClassname } = resolve`
    padding: ${spacers.dp8} ${spacers.dp12};
`

const MultiSelectOption = ({ label, active, disabled, onClick, className }) => (
    <div className={cx(className, { disabled })}>
        <Checkbox
            name={label}
            className={checkboxClassname}
            checked={active}
            label={label}
            onChange={onClick}
            disabled={disabled}
            dense
        />

        {styles}

        <style jsx>{`
            div:hover {
                background-color: ${colors.grey200};
            }

            div.disabled:hover {
                background-color: initial;
            }
        `}</style>
    </div>
)

MultiSelectOption.propTypes = {
    className: propTypes.string,
    // This prop is used by the Select, so still necessary
    // eslint-disable-next-line react/no-unused-prop-types
    value: propTypes.string.isRequired,
    label: propTypes.string.isRequired,
    onClick: propTypes.func,
    active: propTypes.bool,
    disabled: propTypes.bool,
}

export { MultiSelectOption }