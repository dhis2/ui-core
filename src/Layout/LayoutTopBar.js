import React from 'react'
import propTypes from 'prop-types'
import css from 'styled-jsx/css'

const LayoutTopBar = ({ as: Element, children }) => (
    <Element className="layout-top-bar">
        {children}

        <style jsx>{`
            .layout-top-bar {
                grid-area: topbar;
            }
        `}</style>
    </Element>
)

LayoutTopBar.propTypes = {
    as: propTypes.oneOf(['header', 'nav', 'section', 'aside', 'div']),
}

LayoutTopBar.defaultProps = {
    as: 'div',
}

export { LayoutTopBar }
