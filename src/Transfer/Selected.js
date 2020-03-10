import React from 'react'
import propTypes from '@dhis2/prop-types'

import { spacers } from '../theme.js'

export const Selected = ({
    dataTest,
    emptySelectionPlaceholder,
    enableOrderChange,
    selectedElements,
    // eslint-disable-next-line no-unused-vars
    onOrderChange,
}) => (
    <div data-test={`${dataTest}-selected`}>
        {enableOrderChange && console.log('TODO onOrderChange')}
        {selectedElements}
        {!React.Children.count(selectedElements) && emptySelectionPlaceholder}

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
    selectedElements: propTypes.node.isRequired,
    emptySelectionPlaceholder: propTypes.node,
    enableOrderChange: propTypes.bool,
    onOrderChange: propTypes.func,
}
