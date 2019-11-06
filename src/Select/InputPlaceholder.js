import React from 'react'
import propTypes from '@dhis2/prop-types'
import { colors } from '../theme.js'

const InputPlaceholder = ({ placeholder, className }) => {
    if (!placeholder) {
        return null
    }

    return (
        <div className={className}>
            {placeholder}

            <style jsx>{`
                div {
                    color: ${colors.grey600};
                    user-select: none;
                }
            `}</style>
        </div>
    )
}

InputPlaceholder.propTypes = {
    className: propTypes.string,
    placeholder: propTypes.string,
}

export { InputPlaceholder }
