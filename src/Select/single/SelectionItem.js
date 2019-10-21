import React from 'react'
import propTypes from 'prop-types'
import { spacers } from '../../theme.js'

const SelectionItem = ({ icon, label }) => {
    return (
        <div className="selected">
            {icon && <div className="icon">{icon}</div>}
            {label}

            <style jsx>{`
                .selected {
                    display: flex;
                    align-items: center;
                    user-select: none;
                }

                .icon {
                    margin-right: ${spacers.dp8};
                    width: ${spacers.dp16};
                    height: ${spacers.dp16};
                }
            `}</style>
        </div>
    )
}

SelectionItem.propTypes = {
    icon: propTypes.element,
    label: propTypes.string.isRequired,
}

export { SelectionItem }
