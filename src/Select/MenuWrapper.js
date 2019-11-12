import React, { Component } from 'react'
import propTypes from '@dhis2/prop-types'
import { resolve } from 'styled-jsx/css'
import { Card } from '../Card.js'

class MenuWrapper extends Component {
    render() {
        const { children, maxHeight, className, menuRef } = this.props
        const { styles, className: cardClassName } = resolve`
            height: auto;
            max-height: ${maxHeight};
            overflow: auto;
        `

        return (
            <div className={className} ref={menuRef}>
                <Card className={cardClassName}>{children}</Card>

                {styles}

                <style jsx>{`
                    div {
                        position: absolute;
                        z-index: 1;
                        left: 0;
                        right: 0;
                    }
                `}</style>
            </div>
        )
    }
}

MenuWrapper.defaultProps = {
    maxHeight: '280px',
}

MenuWrapper.propTypes = {
    className: propTypes.string,
    children: propTypes.node,
    maxHeight: propTypes.string,
    menuRef: propTypes.object.isRequired,
}

export { MenuWrapper }
