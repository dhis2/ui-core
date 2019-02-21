import React from 'react'
import CircularProgress from 'CircularProgress'
import LinearProgress from 'LinearProgress'
import Card from 'Card'
import { Text, Row, Col, Divider } from '../../../helpers'

function CenteredProgress(props) {
    return (
        <div style={{ width: '358px', height: '186px' }}>
            <Card>
                <CircularProgress {...props} />
            </Card>
        </div>
    )
}

const rows = [
    {
        title: 'Circular progress with "size" prop in small / medium / large',
        list: [
            {
                Component: CircularProgress,
                props: {
                    size: 'small',
                },
            },
            {
                Component: CircularProgress,
                props: {},
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
        list: [
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
        list: [
            {
                Component: LinearProgress,
                props: {},
            },
        ],
    },
    {
        title: 'Linear progress with "margin" prop (string or number)',
        list: [
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
        list: [
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

    renderRow(list) {
        return list.map(({ Component, props }, index) => (
            <Component key={`progress-${index}`} {...props} />
        ))
    }

    render() {
        const style = { width: '100%', marginBottom: 40 }
        return (
            <Col>
                {rows.map(({ title, list }) => (
                    <div key={`progress-${title}`} style={style}>
                        <Text>{title}</Text>
                        <Row>{this.renderRow(list)}</Row>
                    </div>
                ))}
                <Divider />
            </Col>
        )
    }
}
