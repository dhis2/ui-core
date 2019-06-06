import React from 'react'
import propTypes from 'prop-types'
import { arrayWithLength } from '../prop-validators'
import { Action } from './Action'
import { spacers } from '../theme.js'

const Actions = ({ actions }) => {
    if (!actions) {
        return null
    }

    return (
        <div>
            {actions.map(action => (
                <Action key={action.label} {...action} />
            ))}
            <style jsx>{`
                div {
                    margin-left: ${spacers.dp48};
                    margin-right: -${spacers.dp12};
                }
            `}</style>
        </div>
    )
}

const actionsPropType = arrayWithLength(
    0,
    2,
    propTypes.shape({
        label: propTypes.string.isRequired,
        onClick: propTypes.func.isRequired,
    })
)

Actions.propTypes = {
    actions: actionsPropType,
}

export { Actions, actionsPropType }
