import React from 'react'
import propTypes from 'prop-types'
import { resolve } from 'styled-jsx/css'
import { colors, spacers } from './theme.js'
import { Checkbox } from './Checkbox.js'

// Padding has to be set on the label, so that the entire area is clickable
const { styles, className: checkboxClassname } = resolve`
    padding: ${spacers.dp8} ${spacers.dp12};
`

const MultiSelectOption = ({
    value,
    label,
    active,
    disabled,
    onClick,
    className,
}) => (
    <div className={className}>
        <Checkbox
            name={label}
            className={checkboxClassname}
            checked={active}
            label={label}
            onChange={() => {
                onClick({ value, label })
            }}
            disabled={disabled}
        />

        {styles}

        <style jsx>{`
            div:hover {
                background-color: ${colors.grey200};
            }
        `}</style>
    </div>
)

MultiSelectOption.propTypes = {
    className: propTypes.string,
    value: propTypes.string.isRequired,
    label: propTypes.string.isRequired,
    onClick: propTypes.func,
    active: propTypes.bool,
    disabled: propTypes.bool,
}

export { MultiSelectOption }
