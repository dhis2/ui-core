import React from 'react'
import PropTypes from 'prop-types'

const LayoutAreaNavigation = ({ children }) => (
    <section>
        {children}

        <style jsx>{`
            section {
                grid-area: navigation;
            }
        `}</style>
    </section>
)

export { LayoutAreaNavigation }
