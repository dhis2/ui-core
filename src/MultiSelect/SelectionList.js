import React from 'react'
import propTypes from 'prop-types'
import { multiSelectedPropType } from '../common-prop-types.js'
import { Chip } from '../Chip.js'
import { removeOption, findOptionChild } from '../Select/option-helpers.js'

const createRemoveHandler = ({ selected, onChange, value, label }) => () => {
    const clickedOption = { value, label }
    const filtered = removeOption(clickedOption, selected)

    onChange(filtered)
}

const SelectionList = ({ selected, onChange, disabled, options }) => (
    <React.Fragment>
        {selected.map(({ value, label }) => {
            const currentOption = findOptionChild({ value, label }, options)
            const isDisabledOption = currentOption.props.disabled

            // The option should be disabled if it or the select are disabled
            const isDisabled = isDisabledOption || disabled

            // Create an onRemove handler, but only if it's not disabled
            const onRemove = isDisabled
                ? undefined
                : createRemoveHandler({
                      selected,
                      onChange,
                      value,
                      label,
                  })

            return (
                <Chip
                    key={label}
                    onRemove={onRemove}
                    disabled={isDisabled}
                    overflow
                >
                    {label}
                </Chip>
            )
        })}
    </React.Fragment>
)

SelectionList.propTypes = {
    disabled: propTypes.bool,
    onChange: propTypes.func.isRequired,
    options: propTypes.node,
    selected: multiSelectedPropType,
}

export { SelectionList }
