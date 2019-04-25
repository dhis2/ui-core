import React, { Component } from 'react'
import propTypes from 'prop-types'
import css from 'styled-jsx/css'
import cx from 'classnames'

import { ArrowUp, ArrowDown } from '../icons/Arrow.js'

import { DropMenu } from '../DropMenu'
import { Button } from '../Button'

class DropdownButton extends Component {
    state = {
        open: false,
    }

    componentDidMount() {
        document.addEventListener('click', this.onDocClick)
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.onDocClick)
    }

    onDocClick = evt => {
        if (this.elContainer && !this.elContainer.contains(evt.target)) {
            this.setState({ open: false })
        }
    }

    onToggle = () => this.setState({ open: !this.state.open })

    render() {
        const { open } = this.state

        const ArrowIcon = open ? <ArrowUp /> : <ArrowDown />

        return (
            <div ref={c => (this.elContainer = c)}>
                <Button
                    {...this.props}
                    onClick={this.onToggle}
                    className={this.props.className}
                    icon={this.props.icon}
                >
                    {this.props.children}

                    {ArrowIcon}
                </Button>

                {open && <DropMenu component={this.props.component} />}

                <style jsx>{`
                    div {
                        display: inline-flex;
                        position: relative;
                        color: inherit;
                        white-space: nowrap;
                    }
                `}</style>
            </div>
        )
    }
}

DropdownButton.propTypes = {
    className: propTypes.string,
    component: propTypes.element.isRequired,
    icon: propTypes.element,
    children: propTypes.string,

    small: propTypes.bool,
    large: propTypes.bool,

    primary: propTypes.bool,
    secondary: propTypes.bool,
    destructive: propTypes.bool,
    disabled: propTypes.bool,
    onClick: propTypes.func,
}

export { DropdownButton }
