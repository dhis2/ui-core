import React, { Component } from 'react';

import Paper from 'ui/Paper';

import Chip from 'ui/Chip';

export default class ChipDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chipSelected: false,
            hideChip: false,
        };
    }

    toggleChipSelected = () => {
        this.setState({ chipSelected: !this.state.chipSelected });
    };

    hideChip = () => {
        this.setState({ hideChip: true });
    };

    render() {
        return (
            <Paper elevation={6} padded>
                <h3>Chip components</h3>
                <hr />
                <Chip label="Static (no onClick)" />
                <Chip label="Static with icon" icon="star" />
                <Chip
                    icon="print"
                    label="Disabled"
                    disabled
                    onClick={this.toggleChipSelected}
                    onRemoveClick={this.hideChip}
                />
                <Chip
                    label="Toggle selected state"
                    icon="print"
                    selected={this.state.chipSelected}
                    onClick={this.toggleChipSelected}
                />
                {!this.state.hideChip && (
                    <Chip
                        label="Select and delete"
                        selected={this.state.chipSelected}
                        onClick={this.toggleChipSelected}
                        onRemoveClick={this.hideChip}
                    />
                )}
            </Paper>
        );
    }
}
