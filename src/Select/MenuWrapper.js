import React from 'react'
import propTypes from 'prop-types'
import { resolve } from 'styled-jsx/css'
import { Card } from '../Card.js'
import { layers } from '../theme.js'

const MenuWrapper = ({ children, maxHeight, className }) => {
    const { styles, className: cardClassName } = resolve`
        height: auto;
        max-height: ${maxHeight};
        overflow: auto;
    `

    return (
        <div className={className}>
            <Card className={cardClassName}>{children}</Card>

            {styles}

            <style jsx>{`
                div {
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
    className: propTypes.string,
    children: propTypes.node,
    maxHeight: propTypes.string,
}

export { MenuWrapper }
