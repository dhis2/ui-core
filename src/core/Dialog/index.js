/** @format */

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { withAnimatedClose } from '../../utils'
import s from './styles'
import Paper from '../Paper'

const disableScrollingClass = s('disable-scroll')

class Dialog extends Component {
    componentDidMount() {
        this.updateBodyScroll()
    }

    componentDidUpdate() {
        this.updateBodyScroll()
    }

    componentWillUnmount() {
        this.updateBodyScroll(true)
    }

    onBackdropClick = () => {
        const { dismissible, closeHandler } = this.props
        dismissible && closeHandler && closeHandler()
    }

    updateBodyScroll(forceOff) {
        const { open, isAnimatingOut } = this.props
        if (forceOff || (!open && !isAnimatingOut)) {
            document.body.classList.remove(disableScrollingClass)
        } else {
            document.body.classList.add(disableScrollingClass)
        }
    }

    renderTitle() {
        const { title } = this.props

        if (!title) {
            return null
        }

        const isText = ['string', 'number'].includes(typeof title)

        return (
            <header className={s('title')}>
                {isText ? <h6>{title}</h6> : title}
            </header>
        )
    }

    renderFooter() {
        const { actions } = this.props

        if (React.Children.count(actions) === 0) {
            return null
        }

        return (
            <footer className={s('footer')}>
                {React.Children.toArray(actions)}
            </footer>
        )
    }

    render() {
        const {
            size,
            content,
            open,
            isAnimatingOut,
            onAnimationEnd,
        } = this.props

        if (!open && !isAnimatingOut) {
            return null
        }

        const animateOutClass = { [s('animate-out')]: isAnimatingOut }
        const animateOutProps = isAnimatingOut
            ? { onAnimationEnd: onAnimationEnd }
            : null

        return ReactDOM.createPortal(
            <div className={s('container')}>
                <div
                    className={s('backdrop', animateOutClass)}
                    onClick={this.onBackdropClick}
                    {...animateOutProps}
                />
                <div className={s('window', size, animateOutClass)}>
                    <div className={s('scroll-box')}>
                        {this.renderTitle()}
                        <section className={s('content')}>{content}</section>
                        {this.renderFooter()}
                    </div>
                </div>
            </div>,
            document.body
        )
    }
}

Dialog.propTypes = {
    open: PropTypes.bool,
    title: PropTypes.node,
    content: PropTypes.node,
    actions: PropTypes.node,
    size: PropTypes.oneOf(['small', 'medium', 'large', 'fullscreen']),
    dismissible: PropTypes.bool,
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

Dialog.defaultProps = {
    size: 'medium',
    dismissible: true,
}

const EnhancedDialog = withAnimatedClose(Dialog)

export { EnhancedDialog as Dialog }
export default withAnimatedClose(EnhancedDialog)
