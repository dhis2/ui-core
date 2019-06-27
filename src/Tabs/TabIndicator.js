import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

class TabIndicator extends Component {
    state = { animated: false }

    componentDidMount() {
        window.addEventListener('resize', this.refresh)
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.refresh)
    }

    componentDidUpdate(prevProps) {
        /* The tabindicator should not move with a CSS transition when
           it is first positioned into place. In the render cycle
           after it became visible the animation should be enabled  */
        if (!prevProps.visible && this.props.visible) {
            this.setState({
                animated: true,
            })
        }
    }

    refresh = () => {
        this.forceUpdate()
    }

    getTransformStyle() {
        const activeTabNode = this.props.getSelectedTabRef()
        return {
            translateX: activeTabNode ? activeTabNode.offsetLeft : 0,
            scaleX: activeTabNode ? activeTabNode.offsetWidth : 100,
        }
    }

    render() {
        const { translateX, scaleX } = this.getTransformStyle()

        return (
            <span
                className={cx({
                    visible: this.props.visible,
                    animated: this.state.animated,
                })}
            >
                <style jsx>{`
                    span {
                        transform: translateX(${translateX}px) scaleX(${scaleX});
                    }
                `}</style>

                <style jsx>{`
                    span {
                        display: block;
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        height: 4px;
                        /* By choosing 1px here, we can use scaleX to animate 
                           the width of the tabIndicator.
                           I.e. 40px width = scaleX(40) */
                        width: 1px;
                        background-color: #1976d2;
                        transform-origin: left bottom;
                        transition: none;
                        visibility: hidden;
                        z-index: 99999;
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

export { TabIndicator }
