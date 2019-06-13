import React, { PureComponent } from 'react'
import propTypes from 'prop-types'
import { spacers } from '../theme.js'

class Action extends PureComponent {
    onClick = () => {
        this.props.onClick()
        this.props.hide()
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
    label: propTypes.string.isRequired,
    hide: propTypes.func.isRequired,
    onClick: propTypes.func.isRequired,
}

export { Action }
