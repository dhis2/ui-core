import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import { Popover } from '../src/Popover'
import { Menu } from '../src/Menu'
import { MenuItem } from '../src/MenuItem'

class T extends React.Component {
    ref = React.createRef()
    ref2 = React.createRef()
    ref3 = React.createRef()
    ref4 = React.createRef()

    state = {
        open: false,
        open2: false,
        open3: false,
        open4: false,
    }

    closeAll = () =>
        this.setState({
            open: false,
            open2: false,
            open3: false,
            open4: false,
        })

    toggleOpen = () =>
        this.setState({
            open: !this.state.open,
        })

    toggleOpen2 = () =>
        this.setState({
            open2: !this.state.open2,
            open3: false,
        })

    toggleOpen3 = () =>
        this.setState({
            open2: false,
            open3: !this.state.open3,
            open4: false,
        })

    toggleOpen4 = () =>
        this.setState({
            open3: false,
            open4: !this.state.open4,
        })

    componentDidMount() {
        if (this.props.bodyHeight) {
            document.body.style.height = this.props.bodyHeight
        }
    }

    render() {
        return (
            <div>
                <button
                    onClick={this.toggleOpen}
                    ref={this.ref}
                    style={{
                        display: 'block',
                        height: 60,
                        width: 200,
                        ...(this.props.styles || {}),
                    }}
                >
                    Button
                </button>

                <Popover
                    screencover
                    anchorEl={this.ref.current}
                    open={this.state.open}
                    onClose={this.closeAll}
                >
                    <Menu>
                        <MenuItem label="Ignore me!" onClick={this.closeAll} />
                        <span ref={this.ref2}>
                            <MenuItem
                                label="Click me!"
                                onClick={this.toggleOpen2}
                            >
                                <Popover
                                    anchorEl={this.ref2.current}
                                    open={this.state.open2}
                                    onClose={this.closeAll}
                                    level={2}
                                >
                                    <Menu>
                                        <MenuItem
                                            label="This is the 2nd level 1"
                                            onClick={this.closeAll}
                                        />
                                        <span ref={this.ref4}>
                                            <MenuItem
                                                onClick={this.toggleOpen4}
                                                label="Click me!"
                                            >
                                                <Popover
                                                    anchorEl={this.ref4.current}
                                                    open={this.state.open4}
                                                    onClose={this.closeAll}
                                                    level={3}
                                                >
                                                    <Menu>
                                                        <MenuItem
                                                            label="This is the 3nd level"
                                                            onClick={
                                                                this.closeAll
                                                            }
                                                        />
                                                        <MenuItem
                                                            label="This is the 3nd level"
                                                            onClick={
                                                                this.closeAll
                                                            }
                                                        />
                                                        <MenuItem
                                                            label="This is the 3nd level"
                                                            onClick={
                                                                this.closeAll
                                                            }
                                                        />
                                                    </Menu>
                                                </Popover>
                                            </MenuItem>
                                        </span>
                                        <MenuItem
                                            label="This is the 2nd level"
                                            onClick={this.closeAll}
                                        />
                                        <MenuItem
                                            label="This is the 2nd level"
                                            onClick={this.closeAll}
                                        />
                                    </Menu>
                                </Popover>
                            </MenuItem>
                        </span>
                        <MenuItem label="Ignore me!" onClick={this.closeAll} />
                        <MenuItem label="Ignore me!" onClick={this.closeAll} />
                        <span ref={this.ref3}>
                            <MenuItem
                                label="Click me!"
                                onClick={this.toggleOpen3}
                            >
                                <Popover
                                    anchorEl={this.ref3.current}
                                    open={this.state.open3}
                                    onClose={this.closeAll}
                                    level={2}
                                >
                                    <Menu>
                                        <MenuItem
                                            onClick={this.closeAll}
                                            label="2nd level"
                                        />
                                        <MenuItem
                                            onClick={this.closeAll}
                                            label="2nd level"
                                        />
                                        <MenuItem
                                            onClick={this.closeAll}
                                            label="2nd level"
                                        />
                                        <MenuItem
                                            onClick={this.closeAll}
                                            label="2nd level"
                                        />
                                    </Menu>
                                </Popover>
                            </MenuItem>
                        </span>
                        <MenuItem label="Ignore me!" />
                    </Menu>
                </Popover>
            </div>
        )
    }
}

storiesOf('Popover', module)
    .add('DX: test', () => <T />)
    .add('DX: test 2', () => (
        <Fragment>
            <span style={{ flexGrow: 1 }} />
            <T />

            <style jsx>{`
                :global(html),
                :global(body) {
                    height: 100%;
                }

                :global(#root) {
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    align-content: flex-end;
                }
            `}</style>
        </Fragment>
    ))
    .add('DX: test 3', () => (
        <Fragment>
            <span style={{ flexGrow: 1 }} />
            <T styles={{ marginLeft: 'auto' }} />

            <style jsx>{`
                :global(html),
                :global(body) {
                    height: 100%;
                }

                :global(#root) {
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    align-content: flex-end;
                }
            `}</style>
        </Fragment>
    ))
