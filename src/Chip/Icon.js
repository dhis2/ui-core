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
            `}</style>
        </span>
    )
}

Icon.propTypes = {
    /** the slot for an icon is 24x24px, bigger elements will be clipped */
    icon: propTypes.element,
}
