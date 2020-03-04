import React from 'react'
import propTypes from '@dhis2/prop-types'

import { findOption } from './common'
import { multiSelectedPropType } from '../common-prop-types.js'
import { spacers } from '../theme.js'

export const Options = ({
    children,
    dataTest,
    toggleMarkedOption,
    emptyOptionsPlaceholder,
    markedOptions,
}) => (
    <div data-test={`${dataTest}-options`}>
        {React.Children.map(children, child => {
            const option = {
                label: child.props.label,
                value: child.props.value,
            }

            return React.cloneElement(child, {
                onClick: () => toggleMarkedOption(option),
                marked: !!findOption(markedOptions, option),
            })
        })}

        {!children && emptyOptionsPlaceholder}

        <style jsx>{`
            div {
                padding: ${spacers.dp4} 0;
                flex-grow: 1;
                overflow-y: auto;
            }
        `}</style>
    </div>
)

Options.propTypes = {
    children: propTypes.node.isRequired,
    dataTest: propTypes.string.isRequired,
    toggleMarkedOption: propTypes.func.isRequired,
    emptyOptionsPlaceholder: propTypes.node,
    markedOptions: multiSelectedPropType,
}
