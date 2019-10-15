import React from 'react'
import propTypes from 'prop-types'
import { colors, spacers } from '../theme.js'
import { Checkbox } from '../Checkbox.js'

const Option = ({ value, label, active, disabled, onClick }) => (
    <div>
        <Checkbox
            checked={active}
            label={label}
            onChange={e => {
                e.stopPropagation()
                onClick({ value, label })
            }}
            disabled={disabled}
        />

        <style jsx>{`
            div {
                padding: ${spacers.dp8} ${spacers.dp12};
            }

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
