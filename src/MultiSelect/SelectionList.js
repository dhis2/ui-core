import React from 'react'
import propTypes from 'prop-types'
import { multiSelectedPropType } from '../common-prop-types.js'
import { Chip } from '../Chip.js'
import { removeOption } from './remove-option.js'

const createRemoveHandler = ({ selected, onChange, value, label }) => () => {
    const clickedOption = { value, label }
    const filtered = removeOption(clickedOption, selected)

    onChange(filtered)
}

const SelectionList = ({ selected, onChange, disabled }) => (
    <React.Fragment>
        {selected.map(({ value, label }) => (
            <Chip
                key={label}
                onRemove={
                    disabled
                        ? undefined
                        : createRemoveHandler({
                              selected,
                              onChange,
                              value,
                              label,
                          })
                }
                disabled={disabled}
                overflow
            >
                {label}
            </Chip>
        ))}
    </React.Fragment>
)

SelectionList.propTypes = {
    selected: multiSelectedPropType,
    onChange: propTypes.func.isRequired,
    disabled: propTypes.bool,
}

export { SelectionList }
