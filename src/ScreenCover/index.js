import React, { Fragment, PureComponent } from 'react'
import propTypes from 'prop-types'
import css from 'styled-jsx/css'
import cx from 'classnames'

class ScreenCover extends PureComponent {
    elContainer = React.createRef()

    componentDidMount() {
        document.addEventListener('click', this.onDocClick)
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.onDocClick)
    }

    onDocClick = evt => {
        console.log(this.elContainer, evt)
        if (
            this.elContainer.current &&
            this.elContainer.current === evt.target
        ) {
            this.props.onClick()
        }
    }

    render() {
        return (
            <div className="screen-cover" ref={this.elContainer}>
                <div className="children">{this.props.children}</div>

                <style jsx>{`
                    .screen-cover {
                        display: flex;
                        align-items: center;
                        justify-content: center;

                        position: fixed;
                        height: 100%;
                        width: 100%;

                        left: 0;
                        top: 0;

                        background: rgba(200, 200, 200, 0.6);
                    }

                    .children {
                        z-index: 99999999;
                    }
                `}</style>
            </div>
        )
    }
}

ScreenCover.propTypes = {
    onClick: propTypes.func,
}

export { ScreenCover }
