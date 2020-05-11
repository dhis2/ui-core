import React, { Component, useRef } from 'react'
import { createPortal } from 'react-dom'
import propTypes from '@dhis2/prop-types'
import { Popper } from '../Popper.js'

export default {
    title: 'Popper Issue Edoardo',
    component: Popper,
}

const Trigger = ({ onToggle }) => {
    const elRef = useRef()

    const onClick = () => onToggle(elRef)

    return (
        <div className="root" onClick={onClick}>
            <div ref={elRef}>cell content (click here)</div>
            <style jsx>{`
                .root {
                    background: magenta;
                    width: 200px;
                }
            `}</style>
        </div>
    )
}
Trigger.propTypes = {
    onToggle: propTypes.func,
}

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            elRef: undefined,
        }
    }

    onToggle = ref => this.setState({ elRef: ref })

    render() {
        return (
            <div>
                stuff...
                <Trigger onToggle={this.onToggle} />
                {this.state.elRef &&
                    createPortal(
                        <div
                            className="overlay"
                            onClick={() => this.setState({ elRef: undefined })}
                        >
                            <Popper
                                reference={this.state.elRef}
                                placement="right"
                            >
                                <div className="content">popper content</div>
                            </Popper>
                            <style jsx>{`
                                .overlay {
                                    position: fixed;
                                    background-color: rgba(0, 0, 0, 0.3);
                                    width: 100vw;
                                    height: 100vh;
                                    top: 0;
                                    left: 0;
                                }
                                .content {
                                    background-color: white;
                                    padding: 20px;
                                }
                            `}</style>
                        </div>,
                        document.body
                    )}
            </div>
        )
    }
}

export const Default = () => <App />
