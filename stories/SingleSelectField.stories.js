import React from 'react'
import { storiesOf } from '@storybook/react'
import cx from 'classnames'
import propTypes from '@dhis2/prop-types'
import { SingleSelectField, SingleSelectOption } from '../src'

const OptionIcon = () => (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 32">
        <path d="M32 30v-2h-2v-12h2v-2h-6v2h2v12h-6v-12h2v-2h-6v2h2v12h-6v-12h2v-2h-6v2h2v12h-6v-12h2v-2h-6v2h2v12h-2v2h-2v2h34v-2h-2z"></path>
        <path d="M16 0h2l16 10v2h-34v-2l16-10z"></path>
    </svg>
)

const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
        <path d="M24 4C12.95 4 4 12.95 4 24c0 11.04 8.95 20 20 20 11.04 0 20-8.96 20-20 0-11.05-8.96-20-20-20zm-4 30L10 24l2.83-2.83L20 28.34l15.17-15.17L38 16 20 34z" />
    </svg>
)

const CustomOption = ({ value, label, description, icon, active, onClick }) => (
    <a
        className={cx('option', { active })}
        onClick={e => {
            e.stopPropagation()
            onClick({ value, label })
        }}
    >
        {icon && <div className="option-icon">{icon}</div>}
        <div className="text">
            <h3 className="label">{label}</h3>
            <p className="description">{description}</p>
        </div>
        {active && (
            <div className="active-icon">
                <CheckIcon />
            </div>
        )}

        <style jsx>{`
            .option {
                display: flex;
                align-items: center;
                cursor: pointer;
                padding: 8px 16px;
            }
            .option:hover {
                background: #a7bacd;
            }
            .option.active {
                background: #e8edf2;
            }
            .option-icon {
                margin-right: 16px;
                width: 16px;
                height: 16px;
            }
            .text {
                display: flex;
                flex-direction: column;
            }
            .label {
                font-family: sans-serif;
                font-size: 14px;
                margin-top: 0;
                margin-bottom: 4px;
            }
            .description {
                margin: 0;
                font-size: 12px;
            }
            .active-icon {
                margin-left: auto;
                width: 16px;
                height: 16px;
            }
        `}</style>
    </a>
)

CustomOption.propTypes = {
    value: propTypes.string.isRequired,
    label: propTypes.string.isRequired,
    description: propTypes.string,
    icon: propTypes.element,
    active: propTypes.bool,
    onClick: propTypes.func,
}

const longLabel =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas quibusdam est debitis odio, earum explicabo error magni. Expedita voluptatem accusantium nostrum minus, voluptate mollitia placeat perspiciatis quibusdam dicta, fugiat dolor quisquam alias, impedit commodi? Inventore, laboriosam, molestias. Non quod odit eum adipisci, tempora rerum perferendis, incidunt consectetur nesciunt. Qui voluptatibus asperiores dicta doloremque est vitae tempora sapiente dignissimos maiores saepe, animi necessitatibus modi laboriosam quae blanditiis voluptatem recusandae. Praesentium ipsum dolores voluptatum repudiandae cumque, tempore tempora, excepturi numquam atque reiciendis suscipit alias? Architecto dignissimos enim blanditiis laborum'

const defaultProps = {
    label: 'Default label',
    selected: { value: '1', label: 'one' },
    onChange: ({ label }) => alert(`Selected changed to: ${label}`),
    empty: 'No data',
    noMatchText: `No match found for filter`,
    tabIndex: '0',
    clearText: 'Clear',
    filterPlaceholder: 'Type to filter options',
}

const options = [
    <SingleSelectOption key="1" value="1" label="one" />,
    <SingleSelectOption key="2" value="2" label="two" />,
    <SingleSelectOption key="3" value="3" label="three" />,
    <SingleSelectOption key="4" value="4" label="four" />,
    <SingleSelectOption key="5" value="5" label="five" />,
    <SingleSelectOption key="6" value="6" label="six" />,
    <SingleSelectOption key="7" value="7" label="seven" />,
    <SingleSelectOption key="8" value="8" label="eight" />,
    <SingleSelectOption key="9" value="9" label="nine" />,
    <SingleSelectOption key="10" value="10" label="ten" />,
]

storiesOf('SingleSelectField', module)
    .add('Default', () => (
        <SingleSelectField {...defaultProps}>{options}</SingleSelectField>
    ))
    .add('Long label', () => (
        <SingleSelectField
            {...defaultProps}
            selected={{ value: '1', label: longLabel }}
        >
            <SingleSelectOption key="1" value="1" label={longLabel} />
            <SingleSelectOption key="2" value="2" label="two" />
        </SingleSelectField>
    ))
    .add('Disabled option', () => (
        <SingleSelectField {...defaultProps}>
            <SingleSelectOption key="1" value="1" label="one" />
            <SingleSelectOption disabled key="2" value="2" label="two" />
        </SingleSelectField>
    ))
    .add('Custom options', () => (
        <SingleSelectField
            {...defaultProps}
            selected={{ label: 'Tuberculosis Management', value: '1' }}
        >
            <CustomOption
                label="Tuberculosis Management"
                description="Program management for inpatient tuberculosis screening and vaccinations. Used only for clinics."
                value="1"
                icon={<OptionIcon />}
            />
            <CustomOption
                label="Malaria Outbreak"
                description="Monitoring and reporting for suspected malaria outbreaks and incidents."
                value="2"
                icon={<OptionIcon />}
            />
            <CustomOption
                label="Mother and Child Care"
                description="Follow-up for mother and child visits to local hospitals and health centers."
                value="3"
                icon={<OptionIcon />}
            />
        </SingleSelectField>
    ))
    .add('No placeholder, no selected options', () => (
        <SingleSelectField {...defaultProps} selected={{}}>
            {options}
        </SingleSelectField>
    ))
    .add('Placeholder, no selected options', () => (
        <SingleSelectField
            {...defaultProps}
            placeholder="Placeholder text"
            selected={{}}
        >
            {options}
        </SingleSelectField>
    ))
    .add('Prefix, no selected options', () => (
        <SingleSelectField {...defaultProps} prefix="Prefix text" selected={{}}>
            {options}
        </SingleSelectField>
    ))
    .add('Prefix, with selected options', () => (
        <SingleSelectField {...defaultProps} prefix="Prefix text">
            {options}
        </SingleSelectField>
    ))
    .add('With Help text', () => (
        <SingleSelectField {...defaultProps} helpText="A helpful text.">
            {options}
        </SingleSelectField>
    ))
    .add('Status: Valid', () => (
        <SingleSelectField
            {...defaultProps}
            helpText="A helpful text."
            validationText="Totally valid"
            valid
        >
            {options}
        </SingleSelectField>
    ))
    .add('Status: Warning', () => (
        <SingleSelectField
            {...defaultProps}
            helpText="A helpful text."
            validationText="Hm, not quite, I warn thee!"
            warning
        >
            {options}
        </SingleSelectField>
    ))
    .add('Status: Error', () => (
        <SingleSelectField
            {...defaultProps}
            helpText="A helpful text."
            validationText="NO! TOTALLY WRONG!"
            error
        >
            {options}
        </SingleSelectField>
    ))
    .add('Status: Loading', () => (
        <SingleSelectField {...defaultProps} selected={{}} loading>
            {options}
        </SingleSelectField>
    ))
    .add('Status: Loading with text', () => (
        <SingleSelectField
            {...defaultProps}
            selected={{}}
            loading
            loadingText="Loading options"
        >
            {options}
        </SingleSelectField>
    ))
    .add('Required', () => (
        <SingleSelectField {...defaultProps} required>
            {options}
        </SingleSelectField>
    ))
    .add('Maximum height', () => (
        <SingleSelectField {...defaultProps} maxHeight="100px">
            {options}
        </SingleSelectField>
    ))
    .add('Clearable', () => (
        <SingleSelectField {...defaultProps} clearable>
            {options}
        </SingleSelectField>
    ))
    .add('Filterable', () => (
        <SingleSelectField {...defaultProps} filterable>
            {options}
        </SingleSelectField>
    ))
    .add('Empty', () => <SingleSelectField {...defaultProps} selected={{}} />)
    .add('Custom empty', () => (
        <SingleSelectField
            {...defaultProps}
            selected={{}}
            empty={<div>There are no options</div>}
        />
    ))
    .add('Initial focus', () => (
        <SingleSelectField {...defaultProps} initialFocus>
            {options}
        </SingleSelectField>
    ))
    .add('Disabled', () => (
        <SingleSelectField {...defaultProps} disabled>
            {options}
        </SingleSelectField>
    ))
    .add('Dense', () => (
        <SingleSelectField {...defaultProps} dense>
            {options}
        </SingleSelectField>
    ))
