import React, { Component } from 'react'
import propTypes from 'prop-types'
import { ProcessOptions } from './ProcessOptions.js'
import { FilterInput } from './FilterInput.js'
import { Dropdown } from './Dropdown.js'

export class SelectDropdown extends Component {
    state = {
        filter: '',
    }

    handleFilterChange = e => {
        const filter = e.target.value
        this.setState({ filter })
    }

    render() {
        const {
            maxHeight,
            empty: Empty,
            options,
            selected,
            onOptionClick,
            filterable,
        } = this.props
        const { filter } = this.state
        const hasOptions = React.Children.count(options) > 0

        if (hasOptions) {
            return (
                <Dropdown maxHeight={maxHeight}>
                    {filterable && (
                        <FilterInput
                            value={filter}
                            onChange={this.handleFilterChange}
                        />
                    )}
                    <ProcessOptions
                        onClick={onOptionClick}
                        selected={selected}
                        options={options}
                        filter={filterable && filter}
                    />
                </Dropdown>
            )
        }

        return (
            <Dropdown maxHeight={maxHeight}>
                <Empty />
            </Dropdown>
        )
    }
}

SelectDropdown.propTypes = {
    maxHeight: propTypes.string,
    options: propTypes.node,
    empty: propTypes.elementType,
    selected: propTypes.object,
    onOptionClick: propTypes.func,
    filterable: propTypes.bool,
}
