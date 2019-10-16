import React from 'react'
import propTypes from 'prop-types'
import { resolve } from 'styled-jsx/css'
import { colors, spacers } from '../theme.js'
import { Checkbox } from '../Checkbox.js'

// Padding has to be set on the label, so that the entire area is clickable
const { styles, className } = resolve`
    padding: ${spacers.dp8} ${spacers.dp12};
`

const Option = ({ value, label, active, disabled, onClick }) => (
    <div>
        <Checkbox
            className={className}
            checked={active}
            label={label}
            onChange={e => {
                e.stopPropagation()
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

Option.propTypes = {
    label: propTypes.string.isRequired,
    value: propTypes.string.isRequired,
    onClick: propTypes.func,
    active: propTypes.bool,
    disabled: propTypes.bool,
}

export { Option }
