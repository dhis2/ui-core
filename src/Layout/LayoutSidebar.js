import React from 'react'
import propTypes from 'prop-types'
import css from 'styled-jsx/css'

const LayoutSidebar = ({ as: Element, children }) => (
    <Element className="layout-sidebar">
        {children}

        <style jsx>{`
            .layout-sidebar {
                grid-area: sidebar;
            }
        `}</style>
    </Element>
)

LayoutSidebar.propTypes = {
    as: propTypes.oneOf(['section', 'aside', 'div']),
}

LayoutSidebar.defaultProps = {
    as: 'section',
}

export { LayoutSidebar }
