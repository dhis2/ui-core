import React from 'react'
import propTypes from '@dhis2/prop-types'

import { findOption } from './common.js'
import { multiSelectedPropType } from '../common-prop-types.js'
import { spacers } from '../theme.js'

export const Selected = ({
    dataTest,
    emptySelectionPlaceholder,
    enableOrderChange,
    errorOptions,
    selected,
    markedSelected,
    optionsComponent: OptionsComponent,
    toggleMarkedSelected,
    // eslint-disable-next-line no-unused-vars
    onOrderChange,
}) => (
    <div data-test={`${dataTest}-selected`}>
        {enableOrderChange && console.log('TODO onOrderChange')}

        {selected.map(option => {
            const { label, value } = option
            const marked = !!findOption(markedSelected, option)
            const error = !!findOption(errorOptions, option)

            return (
                <OptionsComponent
                    key={`${label}${value}`}
                    marked={marked}
                    error={error}
                    label={label}
                    value={value}
                    onClick={() => toggleMarkedSelected(option)}
                />
            )
        })}

        {!selected.length && emptySelectionPlaceholder}

        <style jsx>{`
            div {
                padding: ${spacers.dp4} 0;
                flex-grow: 1;
                overflow-y: auto;
            }
        `}</style>
    </div>
)

Selected.propTypes = {
    dataTest: propTypes.string.isRequired,
    errorOptions: multiSelectedPropType.isRequired,
    optionsComponent: propTypes.node.isRequired,
    selected: multiSelectedPropType.isRequired,
    toggleMarkedSelected: propTypes.func.isRequired,
    emptySelectionPlaceholder: propTypes.node,
    enableOrderChange: propTypes.bool,
    markedSelected: multiSelectedPropType,
    onOrderChange: propTypes.func,
}
