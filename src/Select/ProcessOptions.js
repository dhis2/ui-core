import React from 'react'
import propTypes from 'prop-types'

const noop = () => {}

const ProcessOptions = ({ children, onClick, selected, filter }) => (
    <React.Fragment>
        {React.Children.map(children, child => {
            const { value, label } = child.props
            const hasValue = 'value' in selected
            const hasLabel = 'label' in selected

            let active = false

            if (hasValue && hasLabel) {
                active = value === selected.value && label === selected.label
            }

            if (filter && !child.props.label.includes(filter)) {
                return null
            }

            return React.cloneElement(child, {
                ...child.props,
                onClick: active ? noop : onClick,
                active,
            })
        })}
    </React.Fragment>
)

ProcessOptions.propTypes = {
    children: propTypes.node.isRequired,
    onClick: propTypes.func.isRequired,
    selected: propTypes.object.isRequired,
    filter: propTypes.string,
}

export { ProcessOptions }
