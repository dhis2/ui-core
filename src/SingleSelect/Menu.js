import React from 'react'
import propTypes from 'prop-types'
import { singleSelectedPropType } from '../common-prop-types.js'
import { Empty } from '../Select/Empty.js'

const onActiveClick = e => {
    e.stopPropagation()
    e.preventDefault()
}

const Menu = ({
    options,
    onChange,
    selected,
    empty,
    onSingleSelectSelection,
}) => {
    if (React.Children.count(options) === 0) {
        // If it's a string, supply it to our <Empty> component so it looks better
        if (typeof empty === 'string') {
            return <Empty message={empty} />
        }

        // Otherwise just render the supplied markup
        return empty
    }

    const children = React.Children.map(options, child => {
        const { value, label } = child.props
        const isValidOption = 'value' in child.props && 'label' in child.props

        // Return early if the child isn't an option, to prevent attaching handlers etc.
        if (!isValidOption) {
            return child
        }

        const active = value === selected.value && label === selected.label
        const onClick = e => {
            onChange({ value, label })
            onSingleSelectSelection(e)
        }

        return React.cloneElement(child, {
            ...child.props,
            onClick: active ? onActiveClick : onClick,
            active,
        })
    })

    return <React.Fragment>{children}</React.Fragment>
}

Menu.propTypes = {
    empty: propTypes.node,
    options: propTypes.node,
    onChange: propTypes.func,
    selected: singleSelectedPropType,
    onSingleSelectSelection: propTypes.func,
}

export { Menu }
