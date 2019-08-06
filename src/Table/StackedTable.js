import React from 'react'
import propTypes from 'prop-types'
import { instanceOfComponent } from '@dhis2/prop-types'

import { Provider } from './tableContext.js'
import { TableBody } from './TableBody.js'
import { TableFoot } from './TableFoot.js'
import { TableHead } from './TableHead.js'
import { extractHeaderLabels } from './extractHeaderLabels.js'
import { tableStyles, tableStylesStacked } from './styles.js'

export const StackedTable = ({ children }) => {
    const headerLabels = extractHeaderLabels(children)

    return (
        <Provider
            value={{
                stackedLayout: true,
                headerLabels,
            }}
        >
            <table>
                {children}
                <style jsx>{tableStyles}</style>
                <style jsx>{tableStylesStacked}</style>
            </table>
        </Provider>
    )
}

const childPropType = propTypes.oneOfType([
    instanceOfComponent(TableHead),
    instanceOfComponent(TableBody),
    instanceOfComponent(TableFoot),
])

StackedTable.propTypes = {
    children: propTypes.oneOfType([
        childPropType,
        propTypes.arrayOf(childPropType),
    ]).isRequired,
}
