/** @format */

import React, { Component } from 'react'

import Paper from 'ui/core/Paper'
import Icon from 'ui/core/Icon'
import { PrimaryButton, CircleButton } from 'ui/core/Button'

import Tooltip from 'ui/core/Tooltip'

const clickTest = event => {
    console.log('Button click', event.target)
}

export default class ProgressDemo extends Component {
    render() {
        return (
            <Paper elevation={6} padded>
                <h3>Progress components</h3>
                <hr />
                <Tooltip text="There is an alarm and I want ot make this text even longer">
                    <PrimaryButton>
                        <Icon name="alarm" />
                        Primary
                    </PrimaryButton>
                </Tooltip>
                <Tooltip text="Test printer here">
                    <CircleButton onClick={clickTest}>
                        <Icon name="print" />
                    </CircleButton>
                </Tooltip>
                {/* IF YOU WANT MORE PROPS ON YOUR TOOLTIP JUST WRAP THE BUTTON */}
                <Tooltip
                    text="I am wrapping the button explicitly"
                    position="right"
                    multiline
                >
                    <CircleButton>
                        <Icon name="delete" />
                    </CircleButton>
                </Tooltip>
            </Paper>
        )
    }
}
