import React from 'react'

import Chip from 'core/Chip'

import { Text, Row, Col, Divider } from '../../../helpers'

const rows = [
    {
        id: 'static',
        title: 'Static chips: no "onClick" handler and no visible hover states',
    },
    {
        id: 'selectAndDelete',
        title: 'Chips with both an "onRemove" and an "onClick" handler',
    },
]

const chipList = [
    {
        label: 'Text only',
    },
    {
        label: 'Selected',
        selected: true,
    },
    {
        label: 'With icon',
        icon: 'star',
    },
    {
        label: 'With image icon',
        icon: 'http://placeimg.com/50/50/people',
        type: 'image',
    },
    {
        label: 'Visual dragging state',
        dragging: true,
    },
    {
        label: 'Disabled',
        icon: 'star',
        disabled: true,
    },
]

export class ChipDemo extends React.Component {
    static id = 'chip'

    state = chipList.reduce(
        (acc, chip, index) => {
            const key = `chip_${index + 1}`

            acc.static[key] = { ...chip }
            acc.selectable[key] = {
                ...chip,
                selected: chip.selected || false,
                onClick: () => this.toggleChipSelected('selectable', key),
            }
            acc.deletable[key] = {
                ...chip,
                onRemove: () => this.deleteChip('deletable', key),
            }
            acc.selectAndDelete[key] = {
                ...chip,
                selected: chip.selected || false,
                onClick: () => this.toggleChipSelected('selectAndDelete', key),
                onRemove: () => this.deleteChip('selectAndDelete', key),
            }
            return acc
        },
        {
            static: {},
            selectable: {},
            deletable: {},
            selectAndDelete: {},
        }
    )

    toggleChipSelected = (stateKey, key) => {
        console.log('toggle selected')
        this.setState({
            [stateKey]: {
                ...this.state[stateKey],
                [key]: {
                    ...this.state[stateKey][key],
                    selected: !this.state[stateKey][key].selected,
                },
            },
        })
    }

    deleteChip = (stateKey, key) => {
        this.setState({
            [stateKey]: {
                ...this.state[stateKey],
                [key]: null,
            },
        })
    }

    renderChipRow(chips) {
        return Object.keys(chips).map(
            key => chips[key] && <Chip key={key} {...chips[key]} />
        )
    }

    render() {
        return (
            <div>
                {rows.map(({ id, title }) => {
                    return (
                        <Col
                            key={`btn-${title}`}
                            style={{ width: '100%', marginBottom: 40 }}
                        >
                            <Text>{title}</Text>
                            <Row>{this.renderChipRow(this.state[id])}</Row>
                        </Col>
                    )
                })}
                <Divider />
            </div>
        )
    }
}
