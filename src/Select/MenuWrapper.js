import React from 'react'
import propTypes from 'prop-types'
import { resolve } from 'styled-jsx/css'
import { Card } from '../Card.js'
import { layers } from '../theme.js'

const MenuWrapper = ({ children, maxHeight }) => {
    const { styles, className } = resolve`
        height: auto;
        max-height: ${maxHeight};
        overflow: auto;
    `

    return (
        <div className="dropdown">
            <Card className={className}>{children}</Card>

            {styles}

            <style jsx>{`
                .dropdown {
                    position: absolute;
                    z-index: ${layers.applicationTop};
                    left: 0;
                    right: 0;
                }
            `}</style>
        </div>
    )
}

MenuWrapper.defaultProps = {
    maxHeight: '280px',
}

MenuWrapper.propTypes = {
    children: propTypes.node,
    maxHeight: propTypes.string,
}

export { MenuWrapper }
