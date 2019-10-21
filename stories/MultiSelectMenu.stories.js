import React from 'react'
import { storiesOf } from '@storybook/react'
import cx from 'classnames'
import propTypes from 'prop-types'
import { Select, MultiSelectMenu, MultiSelectOption } from '../src'

const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
        <path d="M24 4C12.95 4 4 12.95 4 24c0 11.04 8.95 20 20 20 11.04 0 20-8.96 20-20 0-11.05-8.96-20-20-20zm-4 30L10 24l2.83-2.83L20 28.34l15.17-15.17L38 16 20 34z" />
    </svg>
)

const CustomOption = ({
    value,
    label,
    description,
    icon: Icon,
    active,
    onClick,
}) => (
    <a
        className={cx('option', { active })}
        onClick={e => {
            e.stopPropagation()
            onClick({ value, label })
        }}
    >
        {Icon && (
            <div className="option-icon">
                <Icon />
            </div>
        )}
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
    icon: propTypes.elementType,
    active: propTypes.bool,
    onClick: propTypes.func,
}

storiesOf('MultiSelectMenu', module)
    .add('Default', () => (
        <Select
            selected={[]}
            onChange={() => {}}
            input={<div>Input text</div>}
            menu={<MultiSelectMenu />}
        />
    ))
    .add('Custom empty', () => (
        <Select
            selected={[]}
            onChange={() => {}}
            input={<div>Input text</div>}
            menu={<MultiSelectMenu empty="empty" />}
        />
    ))
    .add('Options', () => (
        <Select
            selected={[]}
            onChange={values =>
                alert(`Selected ${JSON.stringify(values, null, 2)}`)
            }
            input={<div>Input text</div>}
            menu={<MultiSelectMenu />}
        >
            <MultiSelectOption value="1" label="one" />
            <MultiSelectOption value="2" label="two" />
        </Select>
    ))
    .add('Selection', () => (
        <Select
            selected={[{ label: 'one', value: '1' }]}
            onChange={values =>
                alert(`Selected ${JSON.stringify(values, null, 2)}`)
            }
            input={<div>Input text</div>}
            menu={<MultiSelectMenu />}
        >
            <MultiSelectOption value="1" label="one" />
            <MultiSelectOption value="2" label="two" />
        </Select>
    ))
    .add('Disabled option', () => (
        <Select
            selected={[]}
            onChange={values =>
                alert(`Selected ${JSON.stringify(values, null, 2)}`)
            }
            input={<div>Input text</div>}
            menu={<MultiSelectMenu />}
        >
            <MultiSelectOption value="1" label="one" disabled />
            <MultiSelectOption value="2" label="two" />
        </Select>
    ))
    .add('Custom options', () => (
        <Select
            selected={[{ label: 'Tuberculosis Management', value: '1' }]}
            onChange={values =>
                alert(`Selected ${JSON.stringify(values, null, 2)}`)
            }
            input={<div>Input text</div>}
            menu={<MultiSelectMenu />}
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
        </Select>
    ))
