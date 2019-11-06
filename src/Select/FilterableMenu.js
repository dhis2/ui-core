import React, { Component } from 'react'
import propTypes from 'prop-types'
import {
    singleSelectedPropType,
    multiSelectedPropType,
} from '../common-prop-types.js'
import { FilterInput } from '../Select/FilterInput.js'
import { NoMatch } from '../Select/NoMatch.js'

export class FilterableMenu extends Component {
    state = {
        filter: '',
    }

    onFilterChange = e => {
        const filter = e.target.value
        this.setState({ filter })
    }

    render() {
        const {
            options,
            onChange,
            selected,
            empty,
            onSingleSelectSelection,
            placeholder,
            noMatchText,
            Menu,
        } = this.props
        const { filter } = this.state
        const menuProps = { onChange, selected, empty, onSingleSelectSelection }

        // If there are no options or there's no filter, just pass everything through
        if (React.Children.count(options) === 0 || !filter) {
            return (
                <React.Fragment>
                    <FilterInput
                        placeholder={placeholder}
                        value={filter}
                        onChange={this.onFilterChange}
                    />
                    <Menu {...menuProps} options={options} />
                </React.Fragment>
            )
        }

        const filtered = React.Children.map(options, child => {
            const isValidOption =
                child.props && 'value' in child.props && 'label' in child.props

            // Filter it out if it's an invalid option
            if (!isValidOption) {
                return null
            }

            const { label } = child.props

            // Filter by label, because that's the part of an option that's displayed to the user
            const match = label.includes(filter)

            return match ? child : null
        })

        const hasMatch = React.Children.count(filtered) > 0

        return (
            <React.Fragment>
                <FilterInput
                    placeholder={placeholder}
                    value={filter}
                    onChange={this.onFilterChange}
                />
                {hasMatch ? (
                    <Menu {...menuProps} options={filtered} />
                ) : (
                    <NoMatch message={noMatchText} />
                )}
            </React.Fragment>
        )
    }
}

FilterableMenu.propTypes = {
    empty: propTypes.node,
    Menu: propTypes.elementType.isRequired,
    options: propTypes.node,
    onChange: propTypes.func,
    selected: propTypes.oneOfType([
        singleSelectedPropType,
        multiSelectedPropType,
    ]).isRequired,
    placeholder: propTypes.string,
    onSingleSelectSelection: propTypes.func,
    noMatchText: propTypes.string.isRequired,
}