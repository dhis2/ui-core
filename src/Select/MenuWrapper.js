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

    getZIndex(el) {
        const computedStyle = window.getComputedStyle(el)
        const zIndex = parseInt(computedStyle.getPropertyValue('z-index'))

        return isNaN(zIndex) ? 0 : zIndex
    }

    getComputedZIndex() {
        let el = this.props.selectRef.current
        let zIndex = 0
        while (el.parentNode) {
            const newZIndex = this.getZIndex(el)
            if (newZIndex > zIndex) {
                zIndex = newZIndex
            }
            el = el.parentNode
        }

        return zIndex
    }

    render() {
        const { children, maxHeight, className, menuRef } = this.props
        const { /*top, left,*/ width } = this.state
        const { styles, className: cardClassName } = resolve`
            height: auto;
            max-height: ${maxHeight};
            overflow: auto;
        `
        const zIndex = this.getComputedZIndex() + layers.applicationTop

        const modalCardEl = document.querySelector('.modal-card')

        return ReactDOM.createPortal(
            <div className={className} ref={menuRef}>
                <Card className={cardClassName}>{children}</Card>

                {styles}

                <style jsx>{`
                    div {
                        position: absolute;
                        z-index: ${zIndex};
                        top: 98px;
                        left: 24px;
                        width: ${width};
                    }
                    :global(.modal-card) {
                        overflow-y: hidden;
                    }
                `}</style>
            </div>,
            modalCardEl
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
