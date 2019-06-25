import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

class TabIndicator extends Component {
    constructor(props) {
        super(props)
        this.state = { animated: false }
    }

    componentDidUpdate(prevProps) {
        // The tabindicator should not move with a CSS transition when it is first positioned into place
        // The tick after the visibility is true, the animation should start
        if (!prevProps.visible && this.props.visible) {
            this.setState({
                animated: true,
            })
        }
    }

    getTransformStyle() {
        const activeTabNode = this.props.getSelectedTabRef()

        if (!activeTabNode) {
            return null
        }

        const translateX = `translateX(${activeTabNode.offsetLeft}px)`
        const scaleX = `scaleX(${activeTabNode.offsetWidth})`
        return { transform: `${translateX} translateY(2px) ${scaleX}` }
    }

    render() {
        return (
            <span
                className={cx({
                    visible: this.props.visible,
                    animated: this.state.animated,
                })}
                style={this.getTransformStyle()}
            >
                <style jsx>{`
                    span {
                        display: block;
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        height: 4px;
                        /* By choosing 1px here, we can use scaleX to animate the width  
                        of the tabIndicator. I.e. 40px width = scaleX(40) */
                        width: 1px;
                        background-color: #1976d2;
                        transform-origin: left bottom;
                        transform: translateX(0) translateY(2px) scaleX(100);
                        transition: none;
                        visibility: hidden;
                    }
                    span.visible {
                        visibility: visible;
                    }

                    span.animated {
                        transition: transform 300ms ease-in-out;
                    }
                `}</style>
            </span>
        )
    }
}

TabIndicator.propTypes = {
    getSelectedTabRef: PropTypes.func.isRequired,
    visible: PropTypes.bool.isRequired,
}

export default TabIndicator
