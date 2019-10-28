import React from 'react'
import { storiesOf } from '@storybook/react'
import cx from 'classnames'
import propTypes from '@dhis2/prop-types'
import { MultiSelectField, MultiSelectOption } from '../src'

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
    selected: [{ value: '1', label: 'one' }],
    onChange: selected =>
        alert(`Selected changed to: ${JSON.stringify(selected, null, 2)}`),
    empty: 'No data',
    noMatchText: `No match found for filter`,
    tabIndex: '0',
    clearText: 'Clear',
    filterPlaceholder: 'Type to filter options',
}

const options = [
    <MultiSelectOption key="1" value="1" label="one" />,
    <MultiSelectOption key="2" value="2" label="two" />,
    <MultiSelectOption key="3" value="3" label="three" />,
    <MultiSelectOption key="4" value="4" label="four" />,
    <MultiSelectOption key="5" value="5" label="five" />,
    <MultiSelectOption key="6" value="6" label="six" />,
    <MultiSelectOption key="7" value="7" label="seven" />,
    <MultiSelectOption key="8" value="8" label="eight" />,
    <MultiSelectOption key="9" value="9" label="nine" />,
    <MultiSelectOption key="10" value="10" label="ten" />,
]

storiesOf('MultiSelectField', module)
    .add('Default', () => (
        <MultiSelectField {...defaultProps}>{options}</MultiSelectField>
    ))
    .add('Long label', () => (
        <MultiSelectField
            {...defaultProps}
            selected={[
                { value: '1', label: longLabel },
                { value: '2', label: 'two' },
            ]}
        >
            <MultiSelectOption key="1" value="1" label={longLabel} />
            <MultiSelectOption key="2" value="2" label="two" />
        </MultiSelectField>
    ))
    .add('Disabled option', () => (
        <MultiSelectField {...defaultProps}>
            <MultiSelectOption key="1" value="1" label="one" />
            <MultiSelectOption disabled key="2" value="2" label="two" />
        </MultiSelectField>
    ))
    .add('Custom options', () => (
        <MultiSelectField
            {...defaultProps}
            selected={[{ label: 'Tuberculosis Management', value: '1' }]}
        >
            <CustomOption
                label="Tuberculosis Management"
                description="Program management for inpatient tuberculosis screening and vaccinations. Used only for clinics."
                value="1"
            />
            <CustomOption
                label="Malaria Outbreak"
                description="Monitoring and reporting for suspected malaria outbreaks and incidents."
                value="2"
            />
            <CustomOption
                label="Mother and Child Care"
                description="Follow-up for mother and child visits to local hospitals and health centers."
                value="3"
            />
        </MultiSelectField>
    ))
    .add('Multiple selected options', () => (
        <MultiSelectField
            {...defaultProps}
            selected={[
                { value: '1', label: 'one' },
                { value: '2', label: 'two' },
                { value: '3', label: 'three' },
                { value: '4', label: 'four' },
                { value: '5', label: 'five' },
                { value: '6', label: 'six' },
                { value: '7', label: 'seven' },
                { value: '8', label: 'eight' },
            ]}
        >
            {options}
        </MultiSelectField>
    ))
    .add('No placeholder, no selected options', () => (
        <MultiSelectField {...defaultProps} selected={[]}>
            {options}
        </MultiSelectField>
    ))
    .add('Placeholder, no selected options', () => (
        <MultiSelectField
            {...defaultProps}
            placeholder="Placeholder text"
            selected={[]}
        >
            {options}
        </MultiSelectField>
    ))
    .add('Prefix, no selected options', () => (
        <MultiSelectField {...defaultProps} prefix="Prefix text" selected={[]}>
            {options}
        </MultiSelectField>
    ))
    .add('Prefix, with selected options', () => (
        <MultiSelectField {...defaultProps} prefix="Prefix text">
            {options}
        </MultiSelectField>
    ))
    .add('With Help text', () => (
        <MultiSelectField {...defaultProps} helpText="A helpful text.">
            {options}
        </MultiSelectField>
    ))
    .add('Status: Valid', () => (
        <MultiSelectField
            {...defaultProps}
            helpText="A helpful text."
            validationText="Totally valid"
            valid
        >
            {options}
        </MultiSelectField>
    ))
    .add('Status: Warning', () => (
        <MultiSelectField
            {...defaultProps}
            helpText="A helpful text."
            validationText="Hm, not quite, I warn thee!"
            warning
        >
            {options}
        </MultiSelectField>
    ))
    .add('Status: Error', () => (
        <MultiSelectField
            {...defaultProps}
            helpText="A helpful text."
            validationText="NO! TOTALLY WRONG!"
            error
        >
            {options}
        </MultiSelectField>
    ))
    .add('Status: Loading', () => (
        <MultiSelectField {...defaultProps} selected={[]} loading>
            {options}
        </MultiSelectField>
    ))
    .add('Status: Loading with text', () => (
        <MultiSelectField
            {...defaultProps}
            selected={[]}
            loading
            loadingText="Loading options"
        >
            {options}
        </MultiSelectField>
    ))
    .add('Required', () => (
        <MultiSelectField {...defaultProps} required>
            {options}
        </MultiSelectField>
    ))
    .add('Maximum height', () => (
        <MultiSelectField {...defaultProps} maxHeight="100px">
            {options}
        </MultiSelectField>
    ))
    .add('Clearable', () => (
        <MultiSelectField {...defaultProps} clearable>
            {options}
        </MultiSelectField>
    ))
    .add('Filterable', () => (
        <MultiSelectField {...defaultProps} filterable>
            {options}
        </MultiSelectField>
    ))
    .add('Empty', () => <MultiSelectField {...defaultProps} selected={[]} />)
    .add('Custom empty', () => (
        <MultiSelectField
            {...defaultProps}
            selected={[]}
            empty={<div>There are no options</div>}
        />
    ))
    .add('Initial focus', () => (
        <MultiSelectField {...defaultProps} initialFocus>
            {options}
        </MultiSelectField>
    ))
    .add('Disabled', () => (
        <MultiSelectField {...defaultProps} disabled>
            {options}
        </MultiSelectField>
    ))
    .add('Dense', () => (
        <MultiSelectField {...defaultProps} dense>
            {options}
        </MultiSelectField>
    ))
