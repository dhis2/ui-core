import React from 'react'
import CircularProgress from 'core/CircularProgress'
import LinearProgress from 'core/LinearProgress'
import Card from 'core/Card'
import { Text, Row, Col, Divider } from '../../../helpers'

function CenteredProgress(props) {
    return (
        <Card width="358px" height="186px">
            <CircularProgress {...props} />
        </Card>
    )
}

const rows = [
    {
        title: 'Circular progress with "size" prop in small / medium / large',
        columns: [
            {
                Component: CircularProgress,
                props: {
                    size: 'small',
                },
            },
            {
                Component: CircularProgress,
                props: {}, // medium = default
            },
            {
                Component: CircularProgress,
                props: {
                    size: 'large',
                },
            },
        ],
    },
    {
        title:
            'Circular progress with "center" prop (will overlay a relatively positioned container)',
        columns: [
            {
                Component: CenteredProgress,
                props: {
                    overlay: true,
                },
            },
        ],
    },
    {
        title: 'Linear progress without "amount" prop (indeterminate mode)',
        columns: [
            {
                Component: LinearProgress,
                props: {},
            },
        ],
    },
    {
        title: 'Linear progress with "margin" prop (sting or number)',
        columns: [
            {
                Component: LinearProgress,
                props: {
                    margin: '16px 0',
                },
            },
        ],
    },
    {
        title: 'Linear progress with "amount" prop at value 60 (60% progress)',
        columns: [
            {
                Component: LinearProgress,
                props: {
                    amount: 60,
                },
            },
        ],
    },
]

export class ProgressDemo extends React.Component {
    static id = 'progress'

    renderProgressRow(columns) {
        return columns.map(({ Component, props }, index) => (
            <Component key={`comp-${index}`} {...props} />
        ))
    }

    render() {
        return (
            <Col>
                {rows.map(({ title, columns }, index) => (
                    <div
                        key={`progress-${title}`}
                        style={{ width: '100%', marginBottom: 40 }}
                    >
                        <Text>{title}</Text>
                        <Row>{this.renderProgressRow(columns)}</Row>
                    </div>
                ))}
                <Divider />
            </Col>
        )
    }
}
