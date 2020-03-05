import React from 'react'
import { Transfer, TransferOption } from '../../index'

export default { title: 'Transfer' }

export const NoOptions = () => <Transfer onChange={console.log} />

export const AvailableOptions = () => (
    <Transfer onChange={console.log}>
        <TransferOption label="Option 1" value="Value 1" />
        <TransferOption label="Option 2" value="Value 2" />
        <TransferOption label="Option 3" value="Value 3" />
    </Transfer>
)

export const SomeOptionsSelected = () => (
    <Transfer
        onChange={console.log}
        selected={[{ label: 'Option 1', value: 'Value 1' }]}
    >
        <TransferOption label="Option 1" value="Value 1" />
        <TransferOption label="Option 2" value="Value 2" />
        <TransferOption label="Option 3" value="Value 3" />
    </Transfer>
)

export const AllOptionsSelected = () => (
    <Transfer
        onChange={console.log}
        selected={[
            { label: 'Option 1', value: 'Value 1' },
            { label: 'Option 2', value: 'Value 2' },
            { label: 'Option 3', value: 'Value 3' },
        ]}
    >
        <TransferOption label="Option 1" value="Value 1" />
        <TransferOption label="Option 2" value="Value 2" />
        <TransferOption label="Option 3" value="Value 3" />
    </Transfer>
)
