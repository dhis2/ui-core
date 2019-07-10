import React from 'react'
import PropTypes from 'prop-types'
import css from 'styled-jsx/css'

const LayoutContent = ({ children }) => (
    <section>
        {children}

        <style jsx>{`
            section {
                grid-area: content;
            }
        `}</style>
    </section>
)

export { LayoutContent }
