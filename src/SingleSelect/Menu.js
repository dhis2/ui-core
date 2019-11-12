import React from 'react'
import propTypes from '@dhis2/prop-types'
import { singleSelectedPropType } from '../common-prop-types.js'
import { Empty } from '../Select/Empty.js'

const onIgnoredClick = e => {
    e.stopPropagation()
    e.preventDefault()
}

const Menu = ({
    options,
    onChange,
    selected,
    empty,
    handleFocusInput,
    handleClose,
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
        const isValidOption =
            child.props && 'value' in child.props && 'label' in child.props

        // Return early if the child isn't an option, to prevent attaching handlers etc.
        if (!isValidOption) {
            return child
        }

        const { value, label, disabled: isDisabled } = child.props

        // Active means the option is currently selected
        const isActive = value === selected.value && label === selected.label
        const onClick = e => {
            const data = { selected: { value, label } }
            e.stopPropagation()

            onChange(data, e)
            handleClose()
            handleFocusInput()
        }

        // Clicks on active options or disabled options should be ignored for the single select
        const isIgnored = isActive || isDisabled

        return React.cloneElement(child, {
            ...child.props,
            onClick: isIgnored ? onIgnoredClick : onClick,
            active: isActive,
        })
    })

    return <React.Fragment>{children}</React.Fragment>
}

Menu.defaultProps = {
    empty: '',
}

Menu.propTypes = {
    empty: propTypes.node,
    options: propTypes.node,
    onChange: propTypes.func,
    selected: singleSelectedPropType,
    handleFocusInput: propTypes.func,
    handleClose: propTypes.func,
}

export { Menu }
