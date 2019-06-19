import React from 'react'
import propTypes from 'prop-types'

import { Card } from '../Card'
import { MenuList } from '../MenuList'
import { spacers } from '../theme.js'

const Menu = ({ children, className }) => (
    <Card>
        <div>
            <MenuList className={className}>{children}</MenuList>
        </div>

        <style jsx>{`
            div {
                padding: ${spacers.dp4} 0;
            }
        `}</style>
    </Card>
)

Menu.propTypes = MenuList.propTypes

export { Menu }
