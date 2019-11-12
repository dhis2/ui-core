import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import propTypes from '@dhis2/prop-types'
import { resolve } from 'styled-jsx/css'
import { Card } from '../Card.js'
import { layers } from '../theme.js'

class MenuWrapper extends Component {
    state = {
        top: 'auto',
        left: 'auto',
        width: 'auto',
    }

    requestId = null

    componentDidMount() {
        window.addEventListener('resize', this.updatePosition)
        this.updatePosition()
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updatePosition)

        if (this.requestId) {
            window.cancelAnimationFrame(this.requestId)
        }
    }

    updatePosition = () => {
        const selectEl = this.props.selectRef.current

        if (this.requestId) {
            window.cancelAnimationFrame(this.requestId)
        }

        this.requestId = window.requestAnimationFrame(() => {
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
        })
    }

    render() {
        const { children, maxHeight, className, menuRef } = this.props
        const { top, left, width } = this.state
        const { styles, className: cardClassName } = resolve`
            height: auto;
            max-height: ${maxHeight};
            overflow: auto;
        `

        return ReactDOM.createPortal(
            <div className={className} ref={menuRef}>
                <Card className={cardClassName}>{children}</Card>

                {styles}

                <style jsx>{`
                    div {
                        position: absolute;
                        z-index: 1;
                        width: ${width};
                    }
                `}</style>
            </div>,
            this.props.selectRef.current
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
    menuRef: propTypes.object.isRequired,
}

export { MenuWrapper }
