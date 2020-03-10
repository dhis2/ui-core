import React, { useState } from 'react'
import { Transfer, TransferOption } from '../index'

export default { title: 'Transfer' }

const StatefulWrapper = ({ children, initialState }) => {
    const [selected, setSelected] = useState(initialState)

    return React.Children.map(children, child =>
        React.cloneElement(child, {
            selected,
            onChange: ({ selected }) => setSelected(selected),
        })
    )
}

StatefulWrapper.defaultProps = {
    initialState: [],
}

const options = [
    <TransferOption
        label="ANC 1st visit"
        value="ANC 1st visit"
        key="ANC 1st visit"
    />,
    <TransferOption
        label="ANC 2nd visit"
        value="ANC 2nd visit"
        key="ANC 2nd visit"
    />,
    <TransferOption
        label="ANC 3rd visit"
        value="ANC 3rd visit"
        key="ANC 3rd visit"
    />,
    <TransferOption
        label="ANC 4th or more visits"
        value="ANC 4th or more visits"
        key="ANC 4th or more visits"
    />,
    <TransferOption
        label="ARI treated with antibiotics (pneumonia) follow-up"
        value="ARI treated with antibiotics (pneumonia) follow-up"
        key="ARI treated with antibiotics (pneumonia) follow-up"
    />,
    <TransferOption
        label="ARI treated with antibiotics (pneumonia) new"
        value="ARI treated with antibiotics (pneumonia) new"
        key="ARI treated with antibiotics (pneumonia) new"
    />,
    <TransferOption
        label="ARI treated with antibiotics (pneumonia) referrals"
        value="ARI treated with antibiotics (pneumonia) referrals"
        key="ARI treated with antibiotics (pneumonia) referrals"
    />,
    <TransferOption
        label="ARI treated without antibiotics (cough) follow-up"
        value="ARI treated without antibiotics (cough) follow-up"
        key="ARI treated without antibiotics (cough) follow-up"
    />,
    <TransferOption
        label="ARI treated without antibiotics (cough) new"
        value="ARI treated without antibiotics (cough) new"
        key="ARI treated without antibiotics (cough) new"
    />,
    <TransferOption
        label="ARI treated without antibiotics (cough) referrals"
        value="ARI treated without antibiotics (cough) referrals"
        key="ARI treated without antibiotics (cough) referrals"
    />,
    <TransferOption
        label="ART No clients who stopped TRT due to TRT failure"
        value="ART No clients who stopped TRT due to TRT failure"
        key="ART No clients who stopped TRT due to TRT failure"
    />,
    <TransferOption
        label="ART No clients who stopped TRT due to adverse clinical status/event"
        value="ART No clients who stopped TRT due to adverse clinical status/event"
        key="ART No clients who stopped TRT due to adverse clinical status/event"
    />,
    <TransferOption
        label="ART No clients with change of regimen due to drug toxicity"
        value="ART No clients with change of regimen due to drug toxicity"
        key="ART No clients with change of regimen due to drug toxicity"
    />,
    <TransferOption
        label="ART No clients with new adverse drug reaction"
        value="ART No clients with new adverse drug reaction"
        key="ART No clients with new adverse drug reaction"
    />,
    <TransferOption
        label="ART No started Opportunist Infection prophylaxis"
        value="ART No started Opportunist Infection prophylaxis"
        key="ART No started Opportunist Infection prophylaxis"
    />,
    <TransferOption
        label="ART clients with new adverse clinical event"
        value="ART clients with new adverse clinical event"
        key="ART clients with new adverse clinical event"
    />,
    <TransferOption
        label="ART defaulters"
        value="ART defaulters"
        key="ART defaulters"
    />,
    <TransferOption
        label="ART enrollment stage 1"
        value="ART enrollment stage 1"
        key="ART enrollment stage 1"
    />,
    <TransferOption
        label="ART enrollment stage 2"
        value="ART enrollment stage 2"
        key="ART enrollment stage 2"
    />,
    <TransferOption
        label="ART enrollment stage 3"
        value="ART enrollment stage 3"
        key="ART enrollment stage 3"
    />,
    <TransferOption
        label="ART enrollment stage 4"
        value="ART enrollment stage 4"
        key="ART enrollment stage 4"
    />,
    <TransferOption
        label="ART entry point: No PMTCT"
        value="ART entry point: No PMTCT"
        key="ART entry point: No PMTCT"
    />,
]

export const Basic = () => (
    <StatefulWrapper>
        <Transfer onChange={() => console.log('Will be overriden')}>
            {options}
        </Transfer>
    </StatefulWrapper>
)

export const Multiple = () => (
    <StatefulWrapper>
        <Transfer
            maxSelections={Infinity}
            onChange={() => console.log('Will be overriden')}
        >
            {options}
        </Transfer>
    </StatefulWrapper>
)

export const Header = () => (
    <StatefulWrapper>
        <Transfer
            onChange={() => console.log('Will be overriden')}
            leftHeader={<h3>Header on the left side</h3>}
        >
            {options}
        </Transfer>
    </StatefulWrapper>
)

export const OptionsFooter = () => (
    <StatefulWrapper>
        <Transfer
            onChange={() => console.log('Will be overriden')}
            leftFooter={
                <a
                    href="#"
                    style={{
                        color: 'grey',
                        padding: '8px 0',
                        display: 'block',
                    }}
                >
                    Reload list
                </a>
            }
        >
            {options}
        </Transfer>
    </StatefulWrapper>
)

export const Filtered = () => (
    <StatefulWrapper>
        <Transfer
            enableFilter
            onChange={() => console.log('Will be overriden by StatefulWrapper')}
            initialFilter="ANC"
            leftHeader={<h3>Header on the left side</h3>}
        >
            {options}
        </Transfer>
    </StatefulWrapper>
)

// eslint-disable-next-line react/prop-types
const CustomOption = ({ label, value, onClick, marked }) => (
    <p
        onClick={() => onClick({ label, value })}
        style={{ background: marked ? 'green' : 'blue' }}
    >
        Custom: {label} (label), {value} (value)
    </p>
)

export const CustomListOptions = () => (
    <StatefulWrapper>
        <Transfer
            onChange={() => console.log('Will be overriden by StatefulWrapper')}
            optionsComponent={CustomOption}
        >
            <CustomOption label="Foo" value="foo" />
            <CustomOption label="Bar" value="bar" />
            <CustomOption label="Baz" value="baz" />
            <CustomOption label="Fo" value="foo" />
            <CustomOption label="Ba" value="bar" />
            <CustomOption label="Ba" value="baz" />
        </Transfer>
    </StatefulWrapper>
)

export const CustomButtonText = () => (
    <StatefulWrapper>
        <Transfer
            maxSelections={Infinity}
            onChange={() => console.log('Will be overriden')}
            labelAddAll="Add all"
            labelAddIndividual="Add individual"
            labelRemoveAll="Remove all"
            labelRemoveIndivitual="Remove individual"
        >
            {options}
        </Transfer>
    </StatefulWrapper>
)

export const EmptyOptionsPlaceholder = () => (
    <Transfer
        onChange={() => console.log('Will be overriden')}
        emptyOptionsPlaceholder={
            <p style={{ textAlign: 'center' }}>
                No options found.
                <br />
                <a href="#" style={{ color: 'grey' }}>
                    Add option
                </a>
            </p>
        }
    />
)

export const EmptySelectionPlaceholder = () => (
    <Transfer
        onChange={() => console.log('Will be overriden')}
        emptySelectionPlaceholder={
            <p style={{ textAlign: 'center' }}>
                You have not selected anything yet
                <br />
            </p>
        }
    >
        {options}
    </Transfer>
)

export const Error = () => (
    <Transfer
        onChange={() => null}
        selected={options.slice(0, 4)}
        errorOptions={[options[2]]}
    >
        {options}
    </Transfer>
)

export const Reordering = () => (
    <Transfer
        maxSelections={Infinity}
        enableOrderChange
        onChange={() => null}
        selected={options.slice(0, 4)}
    >
        {options}
    </Transfer>
)

export const IncreasedOptionsHeight = () => (
    <div style={{ maxHeight: 400 }}>
        <StatefulWrapper>
            <Transfer
                maxSelections={Infinity}
                enableFilter
                onChange={() =>
                    console.log('Will be overriden by StatefulWrapper')
                }
                height="400px"
                leftHeader={<h3>Header on the left side</h3>}
            >
                {options}
            </Transfer>
        </StatefulWrapper>
    </div>
)

export const DifferentWidths = () => (
    <StatefulWrapper>
        <Transfer
            maxSelections={Infinity}
            enableFilter
            onChange={() => console.log('Will be overriden by StatefulWrapper')}
            initialFilter="Ba"
            leftHeader={<h3>Header on the left side</h3>}
            optionsWidth="500px"
            selectedWidth="240px"
        >
            {options}
        </Transfer>
    </StatefulWrapper>
)
