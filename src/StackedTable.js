import React from 'react'
import propTypes from 'prop-types'
import { instanceOfComponent } from '@dhis2/prop-types'

import { extractHeaderLabels } from './StackedTable/extractHeaderLabels.js'
import { Provider } from './StackedTable/TableContext.js'
import { StackedTableBody } from './StackedTableBody.js'
import { StackedTableFoot } from './StackedTableFoot.js'
import { StackedTableHead } from './StackedTableHead.js'
import { colors } from './theme.js'

const childPropType = propTypes.oneOfType([
    instanceOfComponent(StackedTableHead),
    instanceOfComponent(StackedTableBody),
    instanceOfComponent(StackedTableFoot),
])

const childrenPropType = propTypes.oneOfType([
    childPropType,
    propTypes.arrayOf(childPropType),
])

export const Table = ({ children, className, dataTest }) => (
    <table className={className} data-test={dataTest}>
        {children}

        <style jsx>{`
            table {
                display: block;
                border: 0;
                background-color: #ffffff;
                min-width: 100%;
                text-align: left;
                border-collapse: collapse;
                vertical-align: top;
                color: ${colors.grey900};
            }
        `}</style>
    </table>
)

Table.propTypes = {
    children: childrenPropType.isRequired,
    className: propTypes.string,
    dataTest: propTypes.string,
}

export const StackedTable = ({ children, className, dataTest }) => {
    const headerLabels = extractHeaderLabels(children)

    return (
        <Provider value={{ headerLabels }}>
            <Table className={className} dataTest={dataTest}>
                {children}
            </Table>
        </Provider>
    )
}

StackedTable.propTypes = {
    children: childrenPropType.isRequired,
    className: propTypes.string,
    dataTest: propTypes.string,
}

StackedTable.defaultProps = {
    dataTest: 'dhis2-uicore-stackedtable',
}
