import React, { Component } from 'react'
import propTypes from 'prop-types'
import { FilterInput } from '../Select/FilterInput.js'
import { NoMatch } from '../Select/NoMatch.js'

export class FilteredMenu extends Component {
    state = {
        filter: '',
    }

    handleFilterChange = e => {
        const filter = e.target.value
        this.setState({ filter })
    }

    render() {
        const {
            options,
            onChange,
            selected,
            empty,
            placeholder,
            noMatchText,
            Menu,
        } = this.props
        const { filter } = this.state
        const menuProps = { onChange, selected, empty }

        // If there are no options or there's no filter, just pass everything through
        if (React.Children.count(options) === 0 || !filter) {
            return (
                <React.Fragment>
                    <FilterInput
                        placeholder={placeholder}
                        value={filter}
                        onChange={this.handleFilterChange}
                    />
                    <Menu {...menuProps} options={options} />
                </React.Fragment>
            )
        }

        const filtered = React.Children.map(options, child => {
            const { value, label } = child.props

            // Filter it out if it's an invalid option
            if (!value || !label) {
                return null
            }

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
                    onChange={this.handleFilterChange}
                />
                {hasMatch ? (
                    <Menu {...menuProps} options={filtered} />
                ) : (
                    <NoMatch message={noMatchText} filter={filter} />
                )}
            </React.Fragment>
        )
    }
}

FilteredMenu.propTypes = {
    empty: propTypes.node,
    Menu: propTypes.elementType.isRequired,
    options: propTypes.node.isRequired,
    onChange: propTypes.func.isRequired,
    selected: propTypes.object.isRequired,
    placeholder: propTypes.string.isRequired,
    noMatchText: propTypes.string.isRequired,
}
