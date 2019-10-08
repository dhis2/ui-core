import React from 'react'
import propTypes from 'prop-types'
import { resolve } from 'styled-jsx/css'
import { Card } from '../Card.js'
import { layers } from '../theme.js'

const SelectDropdownCard = ({ children, maxHeight }) => {
    // Override Card styles to allow a max-height
    const { styles, className } = resolve`
        height: auto;
        max-height: ${maxHeight};
        overflow: auto;
    `

    return (
        <div className="container">
            <Card className={className}>
                {children}
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

SelectDropdownCard.defaultProps = {
    maxHeight: '280px',
}

SelectDropdownCard.propTypes = {
    children: propTypes.node.isRequired,
    maxHeight: propTypes.string,
}

export { SelectDropdownCard }
