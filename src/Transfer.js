import React, { Children, useState } from 'react'
import propTypes from '@dhis2/prop-types'

import { TransferOption } from './TransferOption.js'
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
    multiple,
    optionsComponent,
    optionsWidth,
    rightFooter,
    selectedWidth,
    selected,
    onOrderChange,
}) => {
    const selectedOptions = Array.isArray(selected)
        ? selected
        : [selected].filter(value => !!value)

    const [filter, setFilter] = useState(initialFilter)
    const availableOptions = Children.map(children, child =>
        findOption(selectedOptions, child.props) ? null : child
    )

    const [markedOptions, setMarkedOptions] = useState([])
    const toggleMarkedOption = option => {
        if (disabled) return

        const newSelected = toggleOption(markedOptions, option).slice(
            multiple ? 0 : -1
        )

        setMarkedOptions(newSelected)
        setMarkedSelected([])
    }

    const [markedSelected, setMarkedSelected] = useState([])
    const toggleMarkedSelected = option => {
        if (disabled) return

        setMarkedSelected(toggleOption(markedSelected, option))
        setMarkedOptions([])
    }

    const filteredOptions = Children.map(availableOptions, child => {
        if (!enableFilter || filter === '') return child
        if (child.props.label.indexOf(filter) === -1) return null

        return child
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
                    toggleMarkedOption={toggleMarkedOption}
                    emptyOptionsPlaceholder={emptyOptionsPlaceholder}
                    markedOptions={markedOptions}
                >
                    {filteredOptions}
                </Options>

                {leftFooter && (
                    <LeftFooter dataTest={dataTest}>{leftFooter}</LeftFooter>
                )}
            </LeftSide>

            <Actions dataTest={dataTest}>
                {multiple && (
                    <AddAll
                        label={labelAddAll}
                        dataTest={dataTest}
                        disabled={disabled || !Children.count(filteredOptions)}
                        onClick={() => {
                            const all = getOptionsFromChildren(filteredOptions)
                            const newSelected = toggleOptions(
                                selectedOptions,
                                all,
                                addOption
                            )

                            setMarkedOptions([])
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
                            selectedOptions,
                            markedOptions,
                            addOption
                        )

                        setMarkedOptions([])
                        onChange({
                            selected: multiple
                                ? newSelected
                                : newSelected.slice(-1),
                        })
                    }}
                />

                {multiple && (
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
                            selectedOptions,
                            markedSelected,
                            removeOption
                        )

                        setMarkedSelected([])
                        onChange({
                            selected: multiple ? newSelected : null,
                        })
                    }}
                />
            </Actions>

            <RightSide dataTest={dataTest} width={selectedWidth}>
                <Selected
                    selected={selectedOptions}
                    dataTest={dataTest}
                    enableOrderChange={enableOrderChange}
                    emptySelectionPlaceholder={emptySelectionPlaceholder}
                    markedSelected={markedSelected}
                    optionsComponent={optionsComponent}
                    onOrderChange={onOrderChange}
                    toggleMarkedSelected={toggleMarkedSelected}
                    errorOptions={errorOptions}
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
    optionsComponent: TransferOption,
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
    multiple: propTypes.bool,
    optionsComponent: propTypes.any,
    optionsWidth: propTypes.string,
    rightFooter: propTypes.node,
    selected: propTypes.oneOfType([
        singleSelectedPropType,
        multiSelectedPropType,
    ]),
    selectedWidth: propTypes.string,
    onOrderChange: propTypes.func,
}
