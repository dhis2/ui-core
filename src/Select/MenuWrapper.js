import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import propTypes from 'prop-types'
import { resolve } from 'styled-jsx/css'
import { Card } from '../Card.js'
import { layers } from '../theme.js'

class MenuWrapper extends Component {
    state = {
        top: 'auto',
        left: 'auto',
        width: 'auto',
    }

    componentDidMount() {
        window.addEventListener('resize', this.updatePosition)
        this.updatePosition()
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updatePosition)
    }

    updatePosition = () => {
        const selectEl = this.props.selectRef.current
        const rect = selectEl.getBoundingClientRect()
        const top = rect.bottom + window.scrollY
        const left = rect.left + window.scrollX
        const width = rect.width

        const sizing = {
            top: `${top}px`,
            left: `${left}px`,
            width: `${width}px`,
        }

        this.setState(sizing)
    }

    render() {
        const { children, maxHeight, className } = this.props
        const { top, left, width } = this.state
        const { styles, className: cardClassName } = resolve`
            height: auto;
            max-height: ${maxHeight};
            overflow: auto;
        `

        return ReactDOM.createPortal(
            <div className={className}>
                <Card className={cardClassName}>{children}</Card>

                {styles}

                <style jsx>{`
                    div {
                        position: absolute;
                        z-index: ${layers.applicationTop};
                        top: ${top};
                        left: ${left};
                        width: ${width};
                    }
                `}</style>
            </div>,
            document.body
        )
    }
}

MenuWrapper.defaultProps = {
    maxHeight: '280px',
}

MenuWrapper.propTypes = {
    className: propTypes.string,
    children: propTypes.node,
    maxHeight: propTypes.string,
    selectRef: propTypes.object.isRequired,
}

export { MenuWrapper }
