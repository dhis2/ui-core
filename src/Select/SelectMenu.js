import React from 'react'
import propTypes from 'prop-types'
import { resolve } from 'styled-jsx/css'
import { Card } from '../Card.js'
import { layers } from '../theme.js'
import { SelectMenuList } from './SelectMenuList.js'

const SelectMenu = ({ children, maxHeight }) => {
    // Override Card styles to allow a max-height
    const { styles, className } = resolve`
        height: auto;
        max-height: ${maxHeight};
        overflow: auto;
    `

    return (
        <div className="container">
            <Card className={className}>
                <div>
                    <SelectMenuList>{children}</SelectMenuList>
                </div>
            </Card>

            {styles}

            <style jsx>{`
                .container {
                    position: absolute;
                    z-index: ${layers.applicationTop};
                    left: 0;
                    right: 0;
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
