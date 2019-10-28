import React from 'react'
import propTypes from 'prop-types'
import cx from 'classnames'
import { singleSelectedPropType } from '../common-prop-types.js'
import { spacers } from '../theme.js'

const Selection = ({ options, selected, className }) => {
    if (React.Children.count(options) === 0) {
        return null
    }

    const selectedOption = React.Children.toArray(options).find(option => {
        const matchesValue = selected.value === option.props.value
        const matchesLabel = selected.label === option.props.label

        return matchesValue && matchesLabel
    })

    if (!selectedOption) {
        return null
    }

    const icon = selectedOption.props.icon
    const label = selectedOption.props.label

    return (
        <div className={cx(className, 'root')}>
            {icon && <div className="root-icon">{icon}</div>}
            {label}

            <style jsx>{`
                .root {
                    display: flex;
                    align-items: center;
                    user-select: none;
                }

                .root-icon {
                    margin-right: ${spacers.dp8};
                    width: ${spacers.dp16};
                    height: ${spacers.dp16};
                    overflow: hidden;
                }
            `}</style>
        </div>
    )
}

Selection.propTypes = {
    className: propTypes.string,
    options: propTypes.node,
    selected: singleSelectedPropType,
}

export { Selection }
