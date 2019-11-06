import React from 'react'
import propTypes from '@dhis2/prop-types'
import { colors, spacers } from '../theme.js'

const InputPrefix = ({ prefix, className }) => {
    if (!prefix) {
        return null
    }

    return (
        <div className={className}>
            {prefix}

            <style jsx>{`
                div {
                    color: ${colors.grey600};
                    padding-right: ${spacers.dp4};
                    font-size: 14px;
                    user-select: none;
                }
            `}</style>
        </div>
    )
}

InputPrefix.propTypes = {
    className: propTypes.string,
    prefix: propTypes.string,
}

export { InputPrefix }
