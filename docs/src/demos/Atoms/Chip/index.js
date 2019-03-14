import React from 'react'
import Chip from 'core/Chip'
import { Text, Row, Col, Divider } from '../../../helpers'

import Icon from '../../../Icon'

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

function iconImage(url) {
    return (
        <img
            src={url}
            alt="chip icon"
            style={{ width: '24px', height: '24px' }}
        />
    )
}

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
        icon: <Icon name="star" />,
    },
    {
        label: 'With image icon',
        icon: iconImage('http://placeimg.com/50/50/people'),
    },
    {
        label: 'Visual dragging state',
        dragging: true,
    },
    {
        label: 'Disabled',
        icon: <Icon name="star" />,
        disabled: true,
    },
    {
        label: 'Very very very very long chip and allow overflow',
        icon: <Icon name="star" />,
        overflow: false,
    },
    {
        label: 'Truncated very very long chip name',
        icon: <Icon name="star" />,
    },
]

const sChipContainer = { margin: '0 20px 20px 0' }
const ChipContainer = ({ children }) => (
    <div style={sChipContainer}>{children}</div>
)

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
            key =>
                chips[key] && (
                    <ChipContainer key={`cc-${key}`}>
                        <Chip key={key} {...chips[key]} />
                    </ChipContainer>
                )
        )
    }

    render() {
        return (
            <div>
                {rows.map(({ id, title }) => {
                    return (
                        <Col
                            key={`cr-${title}`}
                            style={{ width: '100%', marginBottom: 40 }}
                        >
                            <Text>{title}</Text>
                            <Row style={{ flexWrap: 'wrap' }}>
                                {this.renderChipRow(this.state[id])}
                            </Row>
                        </Col>
                    )
                })}
                <Divider />
            </div>
        )
    }
}
