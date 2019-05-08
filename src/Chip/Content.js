import React from 'react'
import propTypes from 'prop-types'

export const Content = ({ children, overflow }) => (
    <span className={cx({ overflow })}>
        {children}

        <style jsx>{`
            span {
                margin: 0 12px;
                color: inherit;
                white-space: nowrap;
            }

            .overflow {
                max-width: 150px;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        `}</style>
    </span>
)

Content.propTypes = {
    overflow: propTypes.bool,
}
