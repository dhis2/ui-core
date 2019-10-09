import React from 'react'
import propTypes from 'prop-types'
import { spacers } from '../theme.js'

const Selected = ({ icon: Icon, label }) => {
    return (
        <div className="selected">
            {Icon && (
                <div className="icon">
                    <Icon />
                </div>
            )}
            {label}

            <style jsx>{`
                .selected {
                    display: flex;
                    align-items: center;
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

Selected.propTypes = {
    icon: propTypes.element,
    label: propTypes.string.isRequired,
}

export { Selected }
