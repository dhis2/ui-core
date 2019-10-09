import React from 'react'
import { storiesOf } from '@storybook/react'
import cx from 'classnames'
import propTypes from 'prop-types'
import { Select, Option } from '../src'

const ExampleIcon = () => (
    <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 32 32"
    >
        <path d="M0 32h16v-32h-16v32zM10 4h4v4h-4v-4zM10 12h4v4h-4v-4zM10 20h4v4h-4v-4zM2 4h4v4h-4v-4zM2 12h4v4h-4v-4zM2 20h4v4h-4v-4zM18 10h14v2h-14zM18 32h4v-8h6v8h4v-18h-14z"></path>
    </svg>
)

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
                padding: 0.5rem 1rem;
            }

            .option:hover {
                background: #a7bacd;
            }

            .option.active {
                cursor: auto;
                background: #e8edf2;
            }

            .option-icon {
                margin-right: 1em;
                width: 1.5em;
                height: 1.5em;
            }

            .text {
                display: flex;
                flex-direction: column;
            }

            .label {
                font-size: 14px;
                margin-top: 0;
                margin-bottom: 0.25em;
            }

            .description {
                margin: 0;
                font-size: 12px;
            }

            .active-icon {
                margin-left: auto;
                width: 1em;
                height: 1em;
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

storiesOf('Select', module)
    .add('Empty', () => (
        <Select
            onChange={({ value }) => alert(`Value changed to ${value}`)}
            selected={{}}
            placeholder="Please select a value"
        >
            <Option label="one" value="1" />
            <Option label="two" value="2" />
            <Option label="three" value="3" />
            <Option label="four" value="4" />
        </Select>
    ))
    .add('Displaying selected option', () => (
        <Select
            onChange={({ value }) => alert(`Value changed to ${value}`)}
            selected={{ label: 'one', value: '1' }}
            placeholder="Please select a value"
        >
            <Option label="one" value="1" />
            <Option label="two" value="2" />
            <Option label="three" value="3" />
            <Option label="four" value="4" />
        </Select>
    ))
    .add('With a disabled option', () => (
        <Select
            onChange={({ value }) => alert(`Value changed to ${value}`)}
            selected={{ label: 'one', value: '1' }}
            placeholder="Please select a value"
        >
            <Option label="one" value="1" />
            <Option disabled label="two" value="2" />
            <Option label="three" value="3" />
            <Option label="four" value="4" />
        </Select>
    ))
    .add('Displaying selected option with exact duplicates', () => (
        <Select
            onChange={({ value }) => alert(`Value changed to ${value}`)}
            selected={{ label: 'one', value: '1' }}
            placeholder="Please select a value"
        >
            <Option label="one" value="1" />
            <Option label="one" value="1" />
            <Option label="two" value="2" />
            <Option label="three" value="3" />
            <Option label="four" value="4" />
            <Option label="one" value="1" />
        </Select>
    ))

    .add('Label', () => (
        <Select
            onChange={({ value }) => alert(`Value changed to ${value}`)}
            selected={{}}
            label="Sort by"
        >
            <Option label="one" value="1" />
            <Option label="two" value="2" />
            <Option label="three" value="3" />
            <Option label="four" value="4" />
        </Select>
    ))
    .add('Label with selected option', () => (
        <Select
            onChange={({ value }) => alert(`Value changed to ${value}`)}
            selected={{ label: 'one', value: '1' }}
            label="Sort by"
        >
            <Option label="one" value="1" />
            <Option label="two" value="2" />
            <Option label="three" value="3" />
            <Option label="four" value="4" />
        </Select>
    ))

    .add('Wrapping long option', () => (
        <Select
            onChange={({ value }) => alert(`Value changed to ${value}`)}
            selected={{ label: longLabel, value: '1' }}
            placeholder="Please select a value"
        >
            <Option label={longLabel} value="1" />
            <Option label="two" value="2" />
            <Option label="three" value="3" />
            <Option label="four" value="4" />
        </Select>
    ))
    .add('Clearable single select', () => (
        <Select
            clearable
            onChange={({ value }) => alert(`Value changed to ${value}`)}
            selected={{ label: 'one', value: '1' }}
            placeholder="Please select a value"
        >
            <Option label="one" value="1" />
            <Option label="two" value="2" />
            <Option label="three" value="3" />
            <Option label="four" value="4" />
        </Select>
    ))
    .add('Overriding the default max-height', () => (
        <Select
            onChange={({ value }) => alert(`Value changed to ${value}`)}
            selected={{}}
            placeholder="Please select a value"
            maxHeight="100px"
        >
            <Option label="one" value="1" />
            <Option label="two" value="2" />
            <Option label="three" value="3" />
            <Option label="four" value="4" />
            <Option label="one" value="1" />
            <Option label="two" value="2" />
            <Option label="three" value="3" />
            <Option label="four" value="4" />
        </Select>
    ))
    .add('Using custom option components', () => (
        <Select
            onChange={({ value }) => alert(`Value changed to ${value}`)}
            selected={{ label: 'Malaria Outbreak', value: '2' }}
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
    .add(
        'Using custom option components with icons rendered in the input',
        () => (
            <Select
                onChange={({ value }) => alert(`Value changed to ${value}`)}
                selected={{ label: 'Malaria Outbreak', value: '2' }}
            >
                <CustomOption
                    label="Tuberculosis Management"
                    description="Program management for inpatient tuberculosis screening and vaccinations. Used only for clinics."
                    value="1"
                    icon={ExampleIcon}
                />
                <CustomOption
                    label="Malaria Outbreak"
                    description="Monitoring and reporting for suspected malaria outbreaks and incidents."
                    value="2"
                    icon={ExampleIcon}
                />
                <CustomOption
                    label="Mother and Child Care"
                    description="Follow-up for mother and child visits to local hospitals and health centers."
                    value="3"
                    icon={ExampleIcon}
                />
            </Select>
        )
    )
