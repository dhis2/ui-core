import React from 'react'
import propTypes from 'prop-types'
import { resolve } from 'styled-jsx/css'
import { Card } from '../Card.js'
import { spacers } from '../theme.js'
import { SelectMenuList } from './SelectMenuList.js'

const SelectMenu = ({ children, maxHeight }) => {
    // Override some Card styles to allow a max-height
    const { styles, className } = resolve`
        height: auto;
        max-height: ${maxHeight};
        overflow: auto;
    `

    return (
        <div>
            <Card className={className}>
                <div className="select-menu-list-wrapper">
                    <SelectMenuList>{children}</SelectMenuList>
                </div>
            </Card>

            {styles}

            <style jsx>{`
                .select-menu-list-wrapper {
                    padding: ${spacers.dp4} 0;
                }
            `}</style>
        </div>
    )
}

SelectMenu.defaultProps = {
    maxHeight: '280px',
}

SelectMenu.propTypes = {
    children: SelectMenuList.propTypes.children,
    maxHeight: propTypes.string,
}

export { SelectMenu }
