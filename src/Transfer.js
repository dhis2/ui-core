import React, { Children, useState } from 'react'
import propTypes from '@dhis2/prop-types'

import { Container } from './Transfer/Container.js'
import { LeftSide } from './Transfer/LeftSide.js'
import { LeftHeader } from './Transfer/LeftHeader.js'
import { Filter } from './Transfer/Filter.js'
import { Options } from './Transfer/Options.js'
import { LeftFooter } from './Transfer/LeftFooter.js'
import { Actions } from './Transfer/Actions.js'
import { AddAll } from './Transfer/AddAll.js'
import { AddIndividual } from './Transfer/AddIndividual.js'
import { RemoveAll } from './Transfer/RemoveAll.js'
import { RemoveIndividual } from './Transfer/RemoveIndividual.js'
import { ReorderingActions } from './Transfer/ReorderingActions.js'
import { RightSide } from './Transfer/RightSide.js'
import { Selected } from './Transfer/Selected.js'
import { RightFooter } from './Transfer/RightFooter.js'
import {
    singleSelectedPropType,
    multiSelectedPropType,
} from './common-prop-types.js'
import {
    addOption,
    findOption,
    findOptionIndex,
    removeOption,
    toggleOption,
    toggleOptions,
} from './Transfer/common.js'

const getOptionsFromChildren = children =>
    Children.toArray(children).map(child => ({
        label: child.props.label,
        value: child.props.value,
    }))

export const Transfer = ({
    children,
    onChange,

    className,
    dataTest,
    disabled,
    emptyOptionsPlaceholder,
    emptySelectionPlaceholder,
    enableFilter,
    enableOrderChange,
    errorOptions,
    height,
    initialFilter,
    labelAddAll,
    labelAddIndividual,
    labelRemoveAll,
    labelRemoveIndivitual,
    leftFooter,
    leftHeader,
    maxSelections,
    optionsWidth,
    rightFooter,
    selectedWidth,
    selected,
    onOrderChange,
}) => {
    /**
     * As this component will filter and sort children
     * in the selected area. When not adding keys,
     * reconciliation will suffer badly
     */
    const allOptions = Children.map(children, child => {
        return React.cloneElement(child, {
            key: `${child.props.label}-${child.props.value}`,
        })
    })

    /**
     * These are all the available option react elements.
     * It will replace all selected options with null
     */
    const [filter, setFilter] = useState(initialFilter)
    const availableOptions = Children.map(allOptions, child =>
        findOption(selected, child.props) ? null : child
    )

    /**
     * These are all the highlighted option react elements on the options side.
     */
    const [markedOptions, setMarkedOptions] = useState([])
    const toggleMarkedOption = option => {
        if (disabled) return

        const newSelected = toggleOption(markedOptions, option).slice(
            -1 * maxSelections
        )

        setMarkedOptions(newSelected)
        setMarkedSelected([])
    }

    /**
     * These are all the highlighted option react elements on the selected side.
     */
    const [markedSelected, setMarkedSelected] = useState([])
    const toggleMarkedSelected = option => {
        if (disabled) return

        setMarkedSelected(toggleOption(markedSelected, option))
        setMarkedOptions([])
    }

    /**
     * Extract the selected options. This way custom options are supported
     * without having to provide a component via the props
     *
     * Children are sorted by the order given in the "selected" array.
     * This is done in order to cover the "append newly selected items
     * at the end" feature/behavior.
     */
    const selectedElements = Children.toArray(allOptions)
        .map(child => {
            const isSelected = !!findOption(selected, child.props)
            const hasError =
                isSelected && !!findOption(errorOptions, child.props)
            const isMarked = !!findOption(markedSelected, child.props)

            if (!isSelected) return null

            return React.cloneElement(child, {
                error: hasError,
                marked: isMarked,
                onClick: toggleMarkedSelected,
            })
        })
        // We can ONLY do this because the children have keys
        .filter(child => !!child)

    selectedElements.sort((left, right) => {
        const leftIndex = findOptionIndex(selected, left.props)
        const rightIndex = findOptionIndex(selected, right.props)

        if (leftIndex < rightIndex) return -1
        return 1
    })

    /**
     * Filtered options, always same as "availableOptions" when
     * "enableFilter" is false
     */
    const filteredOptions = Children.map(availableOptions, child => {
        if (!enableFilter || filter === '') return child
        if (child.props.label.indexOf(filter) === -1) return null

        return child
    })

    /**
     * Filtered marked options, always same as "availableOptions" when
     * "enableFilter" is false
     *
     * These are important as we don't want to move an item to "selected"
     * after it has been highighted but then disappeared because the filter
     * value was changed
     */
    const filteredMarkedOptions = markedOptions.filter(markedOption => {
        if (!enableFilter || filter === '') return true
        return markedOption.label.indexOf(filter) !== -1
    })

    return (
        <Container dataTest={dataTest} className={className} height={height}>
            <LeftSide dataTest={dataTest} width={optionsWidth}>
                {(leftHeader || enableFilter) && (
                    <LeftHeader dataTest={dataTest}>
                        {leftHeader}

                        {enableFilter && (
                            <Filter
                                dataTest={dataTest}
                                filter={filter}
                                onChange={({ value }) => setFilter(value)}
                            />
                        )}
                    </LeftHeader>
                )}

                <Options
                    dataTest={dataTest}
                    emptyOptionsPlaceholder={emptyOptionsPlaceholder}
                    toggleMarkedOption={toggleMarkedOption}
                    markedOptions={markedOptions}
                >
                    {filteredOptions}
                </Options>

                {leftFooter && (
                    <LeftFooter dataTest={dataTest}>{leftFooter}</LeftFooter>
                )}
            </LeftSide>

            <Actions dataTest={dataTest}>
                {maxSelections === Infinity && (
                    <AddAll
                        label={labelAddAll}
                        dataTest={dataTest}
                        disabled={disabled || !Children.count(filteredOptions)}
                        onClick={() => {
                            const all = getOptionsFromChildren(filteredOptions)
                            const newSelected = toggleOptions(
                                selected,
                                all,
                                addOption
                            )

                            setMarkedOptions([])

                            // If we ever allow maxSelection to be any value
                            // other than 1 and Infinity, we need to think
                            // about how this should behave:
                            //
                            // Either we hide this button when it's not "Infinity",
                            // or we have to decide whether we want to take the first
                            // nth options or the last
                            onChange({ selected: newSelected })
                        }}
                    />
                )}

                <AddIndividual
                    label={labelAddIndividual}
                    dataTest={dataTest}
                    disabled={disabled || !markedOptions.length}
                    onClick={() => {
                        const newSelected = toggleOptions(
                            selected,
                            filteredMarkedOptions,
                            addOption
                        )

                        setMarkedOptions([])

                        /**
                         * This will extract from the end, hence the "-1 *"
                         * As the "newest" additions are always at the end of the array,
                         * it's safe to just take the last nth (depending on maxSelection)
                         * to always get the right ones
                         */
                        onChange({
                            selected: newSelected.slice(-1 * maxSelections),
                        })
                    }}
                />

                {maxSelections === Infinity && (
                    <RemoveAll
                        label={labelRemoveAll}
                        dataTest={dataTest}
                        disabled={disabled || !selected.length}
                        onClick={() => {
                            setMarkedSelected([])
                            onChange({ selected: [] })
                        }}
                    />
                )}

                <RemoveIndividual
                    label={labelRemoveIndivitual}
                    dataTest={dataTest}
                    disabled={disabled || !markedSelected.length}
                    onClick={() => {
                        const newSelected = toggleOptions(
                            selected,
                            markedSelected,
                            removeOption
                        )

                        setMarkedSelected([])

                        /**
                         * as the maximum amount of selected items
                         * is already restricted through the selection mechanism,
                         * there's no need to handle `maxSelection` here
                         */
                        onChange({ selected: newSelected })
                    }}
                />
            </Actions>

            <RightSide dataTest={dataTest} width={selectedWidth}>
                <Selected
                    selectedElements={selectedElements}
                    dataTest={dataTest}
                    enableOrderChange={enableOrderChange}
                    emptySelectionPlaceholder={emptySelectionPlaceholder}
                    onOrderChange={onOrderChange}
                />

                {(rightFooter || enableOrderChange) && (
                    <RightFooter dataTest={dataTest}>
                        {enableOrderChange && (
                            <ReorderingActions
                                onChangeUp={console.log}
                                onChangeDown={console.log}
                            />
                        )}

                        {rightFooter}
                    </RightFooter>
                )}
            </RightSide>
        </Container>
    )
}

Transfer.defaultProps = {
    dataTest: 'dhis2-uicore-transfer',
    initialFilter: '',
    errorOptions: [],
    selected: [],
    height: '240px',
    optionsWidth: '320px',
    selectedWidth: '320px',
    maxSelections: 1,
}

Transfer.propTypes = {
    onChange: propTypes.func.isRequired,

    children: propTypes.node,
    className: propTypes.string,
    dataTest: propTypes.string,
    disabled: propTypes.bool,
    emptyOptionsPlaceholder: propTypes.node,
    emptySelectionPlaceholder: propTypes.node,
    enableFilter: propTypes.bool,
    enableOrderChange: propTypes.bool,
    errorOptions: multiSelectedPropType,
    height: propTypes.string,
    initialFilter: propTypes.string,
    labelAddAll: propTypes.string,
    labelAddIndividual: propTypes.string,
    labelRemoveAll: propTypes.string,
    labelRemoveIndivitual: propTypes.string,
    leftFooter: propTypes.node,
    leftHeader: propTypes.node,
    maxSelections: propTypes.oneOf([1, Infinity]),
    optionsWidth: propTypes.string,
    rightFooter: propTypes.node,
    selected: propTypes.oneOfType([
        singleSelectedPropType,
        multiSelectedPropType,
    ]),
    selectedWidth: propTypes.string,
    onOrderChange: propTypes.func,
}
