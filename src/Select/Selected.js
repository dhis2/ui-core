import React from 'react'
import propTypes from 'prop-types'

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
                    margin-right: 1em;
                    width: 1.5em;
                    height: 1.5em;
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
