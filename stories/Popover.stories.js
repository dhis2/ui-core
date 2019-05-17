import React, { Component, Fragment, forwardRef } from 'react'
import { storiesOf, addParameters } from '@storybook/react'

import { Button } from '../src/Button'
import { Popover } from '../src/Popover'
import { Menu } from '../src/Menu'
import { MenuItem } from '../src/MenuItem'
import markdown from './info/molecules/popover.md'

addParameters({ notes: markdown })

const Btn = forwardRef(({ styles = {}, ...props }, ref) => (
    <button
        ref={ref}
        {...props}
        style={{
            display: 'block',
            width: 150,
            height: 50,
            ...styles,
        }}
    />
))

/**
 * ===========================
 * Story with one level opened
 * ===========================
 */
class OneLevel extends Component {
    ref = React.createRef()
    render() {
        return (
            <Fragment>
                <Btn ref={this.ref}>Anchor</Btn>
                {React.Children.map(this.props.children, child =>
                    React.cloneElement(child, { anchorRef: this.ref })
                )}
            </Fragment>
        )
    }
}

storiesOf('Popover', module)
    .addDecorator(fn => <OneLevel>{fn()}</OneLevel>)
    .add('Level one', () => (
        <Popover
            screencover
            open={true}
            onClose={() => null}
            anchorRef={{ current: 'Overriden by story implementation' }}
        >
            <Menu>
                <MenuItem label="First item" onClick={() => null}>
                    <span />
                </MenuItem>
                <MenuItem label="Second item" onClick={() => null}>
                    <span />
                </MenuItem>
                <MenuItem label="Third item" onClick={() => null}>
                    <span />
                </MenuItem>
            </Menu>
        </Popover>
    ))

/**
 * ===========================
 * Story with two levels opened
 * ===========================
 */
class TwoLevels extends Component {
    ref1 = React.createRef()
    ref2 = React.createRef()

    render() {
        return (
            <Fragment>
                <Btn ref={this.ref1}>Anchor</Btn>
                <Popover
                    screencover
                    open={true}
                    onClose={() => null}
                    anchorRef={this.ref1}
                >
                    <Menu>
                        <MenuItem label="First Item" onClick={() => null}>
                            <span />
                        </MenuItem>
                        <MenuItem label="Second Item" onClick={() => null}>
                            <span />
                        </MenuItem>
                        <span ref={this.ref2}>
                            <MenuItem label="Anchor 2" onClick={() => null}>
                                {React.Children.map(
                                    this.props.children,
                                    child =>
                                        React.cloneElement(child, {
                                            anchorRef: this.ref2,
                                        })
                                )}
                            </MenuItem>
                        </span>
                    </Menu>
                </Popover>
            </Fragment>
        )
    }
}

storiesOf('Popover', module)
    .addDecorator(fn => <TwoLevels>{fn()}</TwoLevels>)
    .add('Level two', () => (
        <Popover
            level={1}
            open={true}
            onClose={() => null}
            anchorRef={{ current: 'Overriden by story implementation' }}
        >
            <Menu>
                <MenuItem label="Fourth Item" onClick={() => null}>
                    <span />
                </MenuItem>
                <MenuItem label="Fifth Item" onClick={() => null}>
                    <span />
                </MenuItem>
                <MenuItem label="Sixth Item" onClick={() => null}>
                    <span />
                </MenuItem>
            </Menu>
        </Popover>
    ))

/**
 * =========================================
 * Story with two levels opened on the right
 * =========================================
 */
class TwoLevelsRight extends Component {
    ref1 = React.createRef()
    ref2 = React.createRef()

    render() {
        return (
            <Fragment>
                <Btn
                    ref={this.ref1}
                    styles={{
                        marginLeft: 'auto',
                    }}
                >
                    Anchor
                </Btn>
                <Popover
                    screencover
                    open={true}
                    onClose={() => null}
                    anchorRef={this.ref1}
                >
                    <Menu>
                        <MenuItem label="First Item" onClick={() => null}>
                            <span />
                        </MenuItem>
                        <MenuItem label="Second Item" onClick={() => null}>
                            <span />
                        </MenuItem>
                        <span ref={this.ref2}>
                            <MenuItem label="Anchor 2" onClick={() => null}>
                                {React.Children.map(
                                    this.props.children,
                                    child =>
                                        React.cloneElement(child, {
                                            anchorRef: this.ref2,
                                        })
                                )}
                            </MenuItem>
                        </span>
                    </Menu>
                </Popover>
            </Fragment>
        )
    }
}

storiesOf('Popover', module)
    .addDecorator(fn => <TwoLevelsRight>{fn()}</TwoLevelsRight>)
    .add('On the right', () => (
        <Popover
            level={1}
            open={true}
            onClose={() => null}
            anchorRef={{ current: 'Overriden by story implementation' }}
        >
            <Menu>
                <MenuItem label="Fourth Item" onClick={() => null}>
                    <span />
                </MenuItem>
                <MenuItem label="Fifth Item" onClick={() => null}>
                    <span />
                </MenuItem>
                <MenuItem label="Sixth Item" onClick={() => null}>
                    <span />
                </MenuItem>
            </Menu>
        </Popover>
    ))

/**
 * ================================================
 * Story with two levels opened on the bottom right
 * ================================================
 */
class OneLevelRightBottom extends Component {
    ref1 = React.createRef()

    render() {
        return (
            <Fragment>
                <div className="flex">
                    <span />
                    <div className="container">
                        <Btn
                            ref={this.ref1}
                            styles={{
                                marginLeft: 'auto',
                            }}
                        >
                            Anchor
                        </Btn>
                        {React.Children.map(this.props.children, child =>
                            React.cloneElement(child, { anchorRef: this.ref1 })
                        )}
                    </div>
                </div>

                <style jsx>{`
                    :global(body) {
                        margin: 0;
                    }

                    :global(html),
                    :global(body),
                    :global(#root),
                    .flex {
                        height: 100%;
                    }

                    .flex {
                        display: flex;
                        flex-direction: column;
                    }

                    span {
                        flex-grow: 1;
                    }

                    .container {
                        padding: 16px;
                    }
                `}</style>
            </Fragment>
        )
    }
}

storiesOf('Popover', module)
    .addDecorator(fn => <OneLevelRightBottom>{fn()}</OneLevelRightBottom>)
    .add('On the bottom right', () => (
        <Popover
            screencover
            open={true}
            onClose={() => null}
            anchorRef={{ current: 'Overriden by story implementation' }}
        >
            <Menu>
                <MenuItem label="First Item" onClick={() => null}>
                    <span />
                </MenuItem>
                <MenuItem label="Second Item" onClick={() => null}>
                    <span />
                </MenuItem>
                <MenuItem label="Third Item" onClick={() => null}>
                    <span />
                </MenuItem>
            </Menu>
        </Popover>
    ))
