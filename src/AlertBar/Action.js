import React, { Component } from 'react'
import propTypes from '@dhis2/prop-types'
import { spacers } from '../theme.js'

class Action extends Component {
    onClick = event => {
        this.props.onClick(event)
        this.props.hide(event)
    }

    render() {
        return (
            <span onClick={this.onClick}>
                {this.props.label}
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
    }
}

Action.propTypes = {
    hide: propTypes.func.isRequired,
    label: propTypes.string.isRequired,
    onClick: propTypes.func.isRequired,
}

export { Action }
