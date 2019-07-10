import React from 'react'
import PropTypes from 'prop-types'

const LayoutTopBar = ({ children }) => (
    <section>
        {children}

        <style jsx>{`
            section {
                grid-area: topbar;
            }
        `}</style>
    </section>
)

export { LayoutTopBar }
