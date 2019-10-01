import React from 'react'
import propTypes from '@dhis2/prop-types'

import { Card } from '../Card.js'
import { spacers } from '../theme.js'
import { SelectMenuList } from './SelectMenuList.js'

const SelectMenu = ({ children, className }) => (
    <div className={className}>
        <Card>
            <div className="select-menu-list-wrapper">
                <SelectMenuList>{children}</SelectMenuList>
            </div>
        </Card>

        <style jsx>{`
            .select-menu-list-wrapper {
                padding: ${spacers.dp4} 0;
            }
        `}</style>
    </div>
)

SelectMenu.propTypes = {
    children: SelectMenuList.propTypes.children,
    className: propTypes.string,
}

export { SelectMenu }
