import React from 'react'
import propTypes from 'prop-types'
import css from 'styled-jsx/css'

const LayoutContent = ({ as: Element, children }) => (
    <Element className="layout-content">
        {children}

        <style jsx>{`
            .layout-content {
                grid-area: content;
            }
        `}</style>
    </Element>
)

LayoutContent.propTypes = {
    as: propTypes.oneOf(['main', 'div']),
}

LayoutContent.defaultProps = {
    as: 'main',
}

export { LayoutContent }
