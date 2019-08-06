import React from 'react'
import propTypes from 'prop-types'
import { instanceOfComponent } from '@dhis2/prop-types'

import { Provider } from './tableContext.js'
import { TableBody } from './TableBody.js'
import { TableFoot } from './TableFoot.js'
import { TableHead } from './TableHead.js'
import { tableStyles } from './styles.js'

export const StaticTable = ({ children }) => (
    <Provider
        value={{
            stackedLayout: false,
        }}
    >
        <table>
            {children}
            <style jsx>{tableStyles}</style>
        </table>
    </Provider>
)

const childPropType = propTypes.oneOfType([
    instanceOfComponent(TableHead),
    instanceOfComponent(TableBody),
    instanceOfComponent(TableFoot),
])

StaticTable.propTypes = {
    children: propTypes.oneOfType([
        childPropType,
        propTypes.arrayOf(childPropType),
    ]).isRequired,
}
