import React from 'react'
import ReactDOM from 'react-dom'
import propTypes from '@dhis2/prop-types'
import { resolve } from 'styled-jsx/css'
import { Card } from '../Card.js'
import { layers } from '../theme.js'
<<<<<<< HEAD
=======
import { LayerConsumer } from '../LayerContext.js'
>>>>>>> refactor: rename z-index-context to layer-context

<<<<<<< HEAD
const MenuWrapper = ({
    children,
    maxHeight,
    className,
    menuRef,
    menuTop,
    menuLeft,
    menuWidth,
}) => {
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
                    z-index: ${layers.applicationTop};
                    top: ${menuTop};
                    left: ${menuLeft};
                    width: ${menuWidth};
                }
            `}</style>
        </div>,
        document.body
    )
=======
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
        const { children, maxHeight, className, menuRef, zIndex } = this.props
        const { top, left, width } = this.state
        const { styles, className: cardClassName } = resolve`
            height: auto;
            max-height: ${maxHeight};
            overflow: auto;
        `

        return ReactDOM.createPortal(
            <LayerConsumer
                propZIndex={zIndex}
                defaultZIndex={layers.applicationTop}
            >
                {computedZIndex => (
                    <div className={className} ref={menuRef}>
                        <Card className={cardClassName}>{children}</Card>

                        {styles}

                        <style jsx>{`
                            div {
                                position: absolute;
                                z-index: ${computedZIndex};
                                top: ${top};
                                left: ${left};
                                width: ${width};
                            }
                        `}</style>
                    </div>
                )}
            </LayerConsumer>,
            document.body
        )
    }
>>>>>>> fix(z-index-context): correct prop name
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
    menuTop: propTypes.string.isRequired,
    menuLeft: propTypes.string.isRequired,
    menuWidth: propTypes.string.isRequired,
}

export { MenuWrapper }
