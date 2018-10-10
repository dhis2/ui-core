import React, { Component } from 'react'
import PropTypes from 'prop-types'
import s from './styles'

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
        const activeTabNode = this.props.getActiveTabRef()

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
                className={s('tab-indicator', {
                    visible: this.props.visible,
                    animated: this.state.animated,
                })}
                style={this.getTransformStyle()}
            />
        )
    }
}

TabIndicator.propTypes = {
    getActiveTabRef: PropTypes.func.isRequired,
    visible: PropTypes.bool.isRequired,
}

export { TabIndicator }
export default TabIndicator
