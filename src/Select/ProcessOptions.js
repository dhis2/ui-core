import React from 'react'
import propTypes from 'prop-types'
import { NoMatch } from './NoMatch.js'

const ProcessOptions = ({ options, onClick, selected, filter }) => {
    const noop = () => {}
    const children = React.Children.map(options, child => {
        const { value, label } = child.props
        const hasValue = 'value' in selected
        const hasLabel = 'label' in selected

        let active = false

        if (hasValue && hasLabel) {
            active = value === selected.value && label === selected.label
        }

        if (filter && !label.includes(filter)) {
            return null
        }

        return React.cloneElement(child, {
            ...child.props,
            onClick: active ? noop : onClick,
            active,
        })
    })

    if (filter && React.Children.count(children) === 0) {
        return <NoMatch filter={filter} />
    }

    return <React.Fragment>{children}</React.Fragment>
}

ProcessOptions.propTypes = {
    options: propTypes.node.isRequired,
    onClick: propTypes.func.isRequired,
    selected: propTypes.object.isRequired,
    filter: propTypes.string,
}

export { ProcessOptions }
