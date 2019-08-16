import cx from 'classnames'
import propTypes from 'prop-types'
import React, { Component } from 'react'
import css from 'styled-jsx/css'

import { Button } from '../Button'
import { ButtonStrip } from '../ButtonStrip'
import { buttonVariantPropType } from '../common-prop-types'
import { DropMenu } from '../DropMenu'
import { ArrowDown, ArrowUp } from '../icons/Arrow.js'
import { spacers } from '../theme.js'

const rightButton = css.resolve`
    button {
        padding: 0 ${spacers.dp8};
    }
`

class SplitButton extends Component {
    state = {
        open: false,
    }
    anchorRef = React.createRef()

    onToggle = () => this.setState({ open: !this.state.open })

    render() {
        const { open } = this.state

        const icon = open ? <ArrowUp /> : <ArrowDown />

        return (
            <div ref={this.anchorRef}>
                <ButtonStrip compact>
                    <Button
                        {...this.props}
                        className={cx(this.props.className)}
                    >
                        {this.props.children}
                    </Button>

                    <Button
                        {...this.props}
                        onClick={this.onToggle}
                        className={cx(
                            this.props.className,
                            rightButton.className
                        )}
                    >
                        {icon}
                    </Button>
                </ButtonStrip>

                {open && (
                    <DropMenu
                        component={this.props.component}
                        onClose={() => this.setState({ open: false })}
                        anchorEl={this.anchorRef.current}
                    />
                )}

                {rightButton.styles}
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

SplitButton.propTypes = {
    component: propTypes.element.isRequired,

    onClick: propTypes.func,

    className: propTypes.string,
    name: propTypes.string,
    value: propTypes.string,

    icon: propTypes.element,

    small: propTypes.bool,
    large: propTypes.bool,

    primary: buttonVariantPropType,
    secondary: buttonVariantPropType,
    destructive: buttonVariantPropType,
    disabled: propTypes.bool,
}

export { SplitButton }
