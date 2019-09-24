import React from 'react'
import propTypes from '@dhis2/prop-types'

import { spacers } from '../theme.js'

export const Icon = ({ icon }) => {
    if (!icon) return null

    return (
        <span>
            {icon}

            <style jsx>{`
                span {
                    width: 24px;
                    height: 24px;
                    margin-left: ${spacers.dp4};
                    margin-right: -6px;
                    border-radius: 50%;
                    overflow: hidden;
                }

                span > :global(*) {
                    max-height: 24px;
                    max-width: 24px;
                }
            `}</style>
        </span>
    )
}

Icon.propTypes = {
    /** the slot for an icon is 24x24px, bigger elements will be clipped */
    icon: propTypes.element,
}
