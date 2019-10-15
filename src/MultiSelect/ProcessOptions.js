import React from 'react'
import propTypes from 'prop-types'

const ProcessOptions = ({ options, onClick, selected, filter }) => (
    <React.Fragment>
        {React.Children.map(options, child => {
            const { value, label } = child.props
            const active = !!selected.find(
                ({ value: selectedValue, label: selectedLabel }) => {
                    return value === selectedValue && label === selectedLabel
                }
            )

            if (filter && !label.includes(filter)) {
                return null
            }

            return React.cloneElement(child, {
                ...child.props,
                onClick,
                active,
            })
        })}
    </React.Fragment>
)

ProcessOptions.propTypes = {
    options: propTypes.node.isRequired,
    onClick: propTypes.func.isRequired,
    selected: propTypes.array.isRequired,
    filter: propTypes.string,
}

export { ProcessOptions }
