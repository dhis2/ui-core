/** @format */

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { withAnimatedClose } from '../../utils'
import s from './styles'

class Dialog extends React.Component {
    updateScroll(forceOff) {
        const { open, isAnimatingOut } = this.props
        const disableScrollingClass = s('disable-scroll')

        if (forceOff || (!open && !isAnimatingOut)) {
            document.body.classList.remove(disableScrollingClass)
        } else {
            document.body.classList.add(disableScrollingClass)
        }
    }

    componentDidMount() {
        this.updateScroll()
    }

    componentDidUpdate() {
        this.updateScroll()
    }

    componentWillUnmount() {
        this.updateScroll(true)
    }

    onBackdropClick = () => {
        if (!this.props.dismissible) {
            return
        }

        this.props.onClose && this.props.onClose()
    }

    title() {
        if (!this.props.title) {
            return null
        }

        const { title } = this.props
        const isText = ['string', 'number'].includes(typeof title)
        return (
            <header className={s('title')}>
                {isText ? <h6>{title}</h6> : title}
            </header>
        )
    }

    footer() {
        if (this.props.actions.length === 0) {
            return null
        }

        return <footer className={s('footer')}>{this.props.actions}</footer>
    }

    render() {
        if (!this.props.open && !this.props.isAnimatingOut) {
            return null
        }

        const { isAnimatingOut, onAnimationEnd } = this.props
        const animateOutClass = { [s('animate-out')]: isAnimatingOut }
        const animateOutProps = isAnimatingOut ? { onAnimationEnd } : null

        return ReactDOM.createPortal(
            <div className={s('container')}>
                <div
                    className={s('backdrop', animateOutClass)}
                    onClick={this.onBackdropClick}
                    {...animateOutProps}
                />
                <div className={s('window', this.props.size, animateOutClass)}>
                    {this.title()}
                    <section className={s('content')}>
                        {this.props.children}
                    </section>
                    {this.footer()}
                </div>
            </div>,
            document.body
        )
    }
}

Dialog.defaultProps = {
    size: 'medium',
    dismissible: true,
}

Dialog.propTypes = {
    open: PropTypes.bool,
    title: PropTypes.node,
    actions: PropTypes.array,
    dismissible: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'medium', 'large', 'fullscreen']),
    onClose: (props, propName, componentName) => {
        if (props.dismissible && typeof props[propName] !== 'function') {
            return new Error(
                `Invalid combination of props: A dismissible ${componentName} component needs property ${propName} in order for it to close itself.`
            )
        }
    },
    isAnimatingOut: PropTypes.bool.isRequired,
    onAnimationEnd: PropTypes.func.isRequired,
}

Dialog = withAnimatedClose(Dialog)

export { Dialog }
export default Dialog
