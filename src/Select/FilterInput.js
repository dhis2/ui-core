import React from 'react'
import propTypes from '@dhis2/prop-types'
import { Input } from '../Input.js'
import { spacers, colors } from '../theme.js'

const FilterInput = ({ value, onChange, placeholder, className }) => (
    <div className={className}>
        <Input
            dense
            value={value}
            onChange={onChange}
            type="text"
            name="filter"
            placeholder={placeholder}
            initialFocus
        />

        <style jsx>{`
            div {
                position: sticky;
                top: 0;
                background: ${colors.white};
                padding: ${spacers.dp8} ${spacers.dp8} ${spacers.dp4}
                    ${spacers.dp8};
            }
        `}</style>
    </div>
)

FilterInput.propTypes = {
    className: propTypes.string,
    value: propTypes.string.isRequired,
    onChange: propTypes.func.isRequired,
    placeholder: propTypes.string,
}

export { FilterInput }
