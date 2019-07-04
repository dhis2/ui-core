import React from 'react'
import PropTypes from 'prop-types'

const LayoutAreaSidebar = ({ children }) => (
    <section>
        {children}

        <style jsx>{`
            section {
                grid-area: sidebar;
            }
        `}</style>
    </section>
)

export { LayoutAreaSidebar }
