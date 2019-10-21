import React from 'react'
import propTypes from 'prop-types'
import { Empty } from '../common/Empty.js'

const Menu = ({ options, onChange, selected, empty }) => {
    if (React.Children.count(options) === 0) {
        return empty || <Empty />
    }

    const children = React.Children.map(options, child => {
        const { value, label } = child.props
        const hasValue = 'value' in selected
        const hasLabel = 'label' in selected

        let active = false

        if (hasValue && hasLabel) {
            active = value === selected.value && label === selected.label
        }

        return React.cloneElement(child, {
            ...child.props,
            onClick: active ? () => {} : () => onChange({ value, label }),
            active,
        })
    })

    return <React.Fragment>{children}</React.Fragment>
}

Menu.propTypes = {
    empty: propTypes.node,
    options: propTypes.node.isRequired,
    onChange: propTypes.func.isRequired,
    selected: propTypes.object.isRequired,
}

export { Menu }
