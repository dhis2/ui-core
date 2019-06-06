import React from 'react'
import propTypes from 'prop-types'
import { spacers } from '../theme.js'

const Action = ({ label, onClick }) => (
    <span onClick={onClick}>
        {label}
        <style jsx>{`
            span {
                margin-right: ${spacers.dp12};
                text-decoration: underline;
            }
            span:hover {
                cursor: pointer;
            }
        `}</style>
    </span>
)

Action.propTypes = {
    label: propTypes.string.isRequired,
    onClick: propTypes.func.isRequired,
}

export { Action }
