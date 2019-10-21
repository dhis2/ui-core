import React from 'react'
import propTypes from 'prop-types'
import { Chip } from '../../Chip.js'

// eslint-disable-next-line
const SelectionList = ({ selected, onChange }) => {
    return (
        <React.Fragment>
            {selected.map(({ label }) => (
                <Chip key={label} onRemove={() => alert('Removed')} overflow>
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
