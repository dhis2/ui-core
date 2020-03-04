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
import { multiSelectedPropType } from './common-prop-types.js'
import {
    addOption,
    findOption,
    removeOption,
    toggleOption,
    toggleOptions,
} from './Transfer/common.js'

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
    optionsComponent,
    optionsWidth,
    rightFooter,
    selectedWidth,
    selected,
    onOrderChange,
}) => {
    const [filter, setFilter] = useState(initialFilter)
    const availableOptions = Children.map(children, child =>
        findOption(selected, child.props) ? null : child
    )
    const filteredOptions = Children.map(availableOptions, child => {
        if (!enableFilter || filter === '') return child
        if (child.props.label.indexOf(filter) === -1) return null

        return child
    })

    // eslint-ignore-next-line no-unused-vars
    const [markedOptions, setMarkedOptions] = useState([])
    const toggleMarkedOption = option => {
        if (disabled) return
        setMarkedOptions(toggleOption(markedOptions, option))
        setMarkedSelected([])
    }

    // eslint-ignore-next-line no-unused-vars
    const [markedSelected, setMarkedSelected] = useState([])
    const toggleMarkedSelected = option => {
        if (disabled) return
        setMarkedSelected(toggleOption(markedSelected, option))
        setMarkedOptions([])
    }

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
                <AddAll
                    label={labelAddAll}
                    dataTest={dataTest}
                    disabled={disabled || !Children.count(filteredOptions)}
                    onClick={() => {
                        const all = Children.toArray(filteredOptions).map(
                            child => ({
                                label: child.props.label,
                                value: child.props.value,
                            })
                        )
                        const newSelected = toggleOptions(
                            selected,
                            all,
                            addOption
                        )

                        setMarkedOptions([])
                        onChange({ selected: newSelected })
                    }}
                />

                <AddIndividual
                    label={labelAddIndividual}
                    dataTest={dataTest}
                    disabled={disabled || !markedOptions.length}
                    onClick={() => {
                        const newSelected = toggleOptions(
                            selected,
                            markedOptions,
                            addOption
                        )

                        setMarkedOptions([])
                        onChange({ selected: newSelected })
                    }}
                />

                <RemoveAll
                    label={labelRemoveAll}
                    dataTest={dataTest}
                    disabled={disabled || !selected.length}
                    onClick={() => {
                        setMarkedSelected([])
                        onChange({ selected: [] })
                    }}
                />

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
                        onChange({ selected: newSelected })
                    }}
                />
            </Actions>

            <RightSide dataTest={dataTest} width={selectedWidth}>
                <Selected
                    selected={selected}
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
    children: propTypes.node.isRequired,
    onChange: propTypes.func.isRequired,

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
    optionsComponent: propTypes.node,
    optionsWidth: propTypes.string,
    rightFooter: propTypes.node,
    selected: multiSelectedPropType,
    selectedWidth: propTypes.string,
    onOrderChange: propTypes.func,
}
