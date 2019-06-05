import React, { Fragment } from 'react'
import propTypes from 'prop-types'

export const Icon = ({ icon }) => {
    if (!icon) return null

    return (
        <span>
            {icon}

            <style jsx>{`
                span {
                    width: 24px;
                    height: 24px;
                    margin-left: 4px;
                    margin-right: -6px;
                    border-radius: 50%;
                    overflow: hidden;
                }

                /* force icons to fit in our icon drawer */
                span > :global(*) {
                    width: 24px;
                    height: 24px;
                }
            `}</style>
        </span>
    )
}

Icon.propTypes = {
    icon: propTypes.element,
}
