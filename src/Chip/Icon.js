import React, { Fragment } from 'react'
import propTypes from 'prop-types'

export const Icon = ({ icon }) => {
    if (!icon) return

    return (
        <span>
            {icon}

            <style jsx>{`
                span {
                    width: 24px;
                    height: 24px;
                    margin-left: 4px;
                    border-radius: 50%;
                    overflow: hidden;
                }
            `}</style>
        </span>
    )
}

Icon.propTypes = {
    icon: propTypes.element,
}
