import React from 'react'
import propTypes from 'prop-types'
import { Chip } from '../Chip.js'

const createRemoveHandler = ({ selected, onChange, value, label }) => () => {
    const filtered = selected.filter(selection => {
        const matchesLabel = label === selection.label
        const matchesValue = value === selection.value
        return !matchesLabel && !matchesValue
    })

    onChange(filtered)
}

const SelectionList = ({ selected, onChange }) => {
    return (
        <React.Fragment>
            {selected.map(({ value, label }) => (
                <Chip
                    key={label}
                    onRemove={createRemoveHandler({
                        selected,
                        onChange,
                        value,
                        label,
                    })}
                    overflow
                >
                    {label}
                </Chip>
            ))}
        </React.Fragment>
    )
}

SelectionList.propTypes = {
    selected: propTypes.object.isRequired,
    onChange: propTypes.func.isRequired,
}

export { SelectionList }
