import React from 'react'
import propTypes from 'prop-types'
import { Input } from '../Input.js'
import { spacers, colors } from '../theme.js'

const FilterInput = ({ value, onChange }) => (
    <div className="container">
        <Input
            dense
            value={value}
            onChange={onChange}
            type="text"
            name="filter"
            placeholder="Type to filter options"
            initialFocus
        />

        <style jsx>{`
            .container {
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
    value: propTypes.string.isRequired,
    onChange: propTypes.func.isRequired,
}

export { FilterInput }
