import React from 'react'
import propTypes from 'prop-types'
import { NoMatch } from '../Select/NoMatch.js'

const ProcessOptions = ({ options, onClick, selected, filter }) => {
    const children = React.Children.map(options, child => {
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
    })

    if (filter && React.Children.count(children) === 0) {
        return <NoMatch filter={filter} />
    }

    return <React.Fragment>{children}</React.Fragment>
}

ProcessOptions.propTypes = {
    options: propTypes.node.isRequired,
    onClick: propTypes.func.isRequired,
    selected: propTypes.array.isRequired,
    filter: propTypes.string,
}

export { ProcessOptions }
