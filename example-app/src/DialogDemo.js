/** @format */

import React, { Component } from 'react'
import { PrimaryButton } from 'ui/core/Button'
import Paper from 'ui/core/Paper'
import Dialog from 'ui/core/Dialog'

const tdStyle = {
    padding: '0 16px 16px 0',
    verticalAlign: 'top',
    minWidth: 200,
}

const dialogContent = (
    <div>
        <p>First line of content. This code be text, numbers, or a node.</p>
        <p>Second line of content</p>
        <p>
            Cillum velit nisi duis labore elit tempor ad sunt et exercitation
            est consequat do. Esse enim esse dolor enim aliquip. Eu ullamco
            dolore cupidatat ipsum. Ullamco laboris eu ut aute officia
            incididunt nisi fugiat. Id culpa eu minim officia qui eu
            exercitation deserunt labore pariatur.
        </p>
        <p>
            Labore quis sunt pariatur amet. Velit nisi non aute exercitation est
            sunt reprehenderit nisi eu. Esse fugiat sit laborum nostrud
            consequat labore occaecat adipisicing. Dolor fugiat ullamco officia
            minim commodo amet elit enim eu.
        </p>
    </div>
)

class DialogDemo extends Component {
    constructor(props) {
        super(props)
        this.baseDialogProps = {
            title: 'A Dialog Title',
            actions: [
                <PrimaryButton key="close-dialog" onClick={this.onClose}>
                    Close dialog
                </PrimaryButton>,
            ],
            onClose: this.onClose,
        }
        this.state = {
            dialogProps: {
                ...this.baseDialogProps,
                open: false,
            },
        }
    }

    onClose = () => {
        this.setState({
            dialogProps: {
                ...this.baseDialogProps,
                open: false,
            },
        })
    }

    openDialog(overrideProps) {
        this.setState({
            dialogProps: {
                ...this.baseDialogProps,
                ...overrideProps,
                open: true,
            },
        })
    }

    render() {
        return (
            <div>
                <h6>Dialog components</h6>
                <br />
                <table style={{ maxWidth: 1200 }}>
                    <tbody>
                        <tr>
                            <td style={tdStyle}>
                                Open the dialog with default settings:
                                dismissible is true & size is "medium". Note
                                that because dismissible is true, we also need
                                to provide a onClose.
                            </td>
                            <td style={tdStyle}>
                                <PrimaryButton
                                    onClick={() => this.openDialog()}
                                >
                                    Open dialog
                                </PrimaryButton>
                            </td>
                        </tr>
                        <tr>
                            <td style={tdStyle}>Open small sized dialog.</td>
                            <td style={tdStyle}>
                                <PrimaryButton
                                    onClick={() =>
                                        this.openDialog({ size: 'small' })
                                    }
                                >
                                    Open dialog
                                </PrimaryButton>
                            </td>
                        </tr>
                        <tr>
                            <td style={tdStyle}>Open large size dialog</td>
                            <td style={tdStyle}>
                                <PrimaryButton
                                    onClick={() =>
                                        this.openDialog({ size: 'large' })
                                    }
                                >
                                    Open dialog
                                </PrimaryButton>
                            </td>
                        </tr>
                        <tr>
                            <td style={tdStyle}>Open fullscreen size dialog</td>
                            <td style={tdStyle}>
                                <PrimaryButton
                                    onClick={() =>
                                        this.openDialog({ size: 'fullscreen' })
                                    }
                                >
                                    Open dialog
                                </PrimaryButton>
                            </td>
                        </tr>
                        <tr>
                            <td style={tdStyle}>
                                Open non-dismissible dialog. This means clicking
                                on the backdrop won't hide the dialog and the
                                user is forced to interact with the dialog
                                before proceeding. Note that when dismissible is
                                false, no onClose is required.
                            </td>
                            <td style={tdStyle}>
                                <PrimaryButton
                                    onClick={() =>
                                        this.openDialog({
                                            dismissible: false,
                                            onClose: null,
                                        })
                                    }
                                >
                                    Open dialog
                                </PrimaryButton>
                            </td>
                        </tr>
                        <tr>
                            <td style={tdStyle}>
                                Open the dialog with default settings and a lot
                                of content to see how the dialog content
                                scrolls.
                            </td>
                            <td style={tdStyle}>
                                <PrimaryButton
                                    onClick={() => this.openDialog()}
                                >
                                    Open dialog
                                </PrimaryButton>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <Dialog {...this.state.dialogProps}>{dialogContent}</Dialog>
            </div>
        )
    }
}

export default DialogDemo
