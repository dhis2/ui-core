import React from 'react'
import { storiesOf } from '@storybook/react'
import cx from 'classnames'
import { Select, Option } from '../src'

const Icon = () => (
    <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
    >
        <path d="M0 32h16v-32h-16v32zM10 4h4v4h-4v-4zM10 12h4v4h-4v-4zM10 20h4v4h-4v-4zM2 4h4v4h-4v-4zM2 12h4v4h-4v-4zM2 20h4v4h-4v-4zM18 10h14v2h-14zM18 32h4v-8h6v8h4v-18h-14z"></path>
    </svg>
)

// eslint-disable-next-line react/prop-types
const CustomOption = ({ value, label, active, onClick }) => (
    <a
        className={cx({ active })}
        onClick={e => {
            e.stopPropagation()
            onClick({ value, label })
        }}
    >
        {label}

        <style jsx>{`
            a {
                color: red;
                font-size: 2em;
                display: block;
                cursor: pointer;
            }

            a:hover {
                background: black;
            }

            a.active {
                background: blue;
                cursor: auto;
            }
        `}</style>
    </a>
)

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
            selected={{ label: 'two', value: '2' }}
        >
            <CustomOption label="one" value="1" />
            <CustomOption label="two" value="2" />
            <CustomOption label="three" value="3" />
            <CustomOption label="four" value="4" />
        </Select>
    ))
    .add('Using custom option components with icons', () => (
        <Select
            onChange={({ value }) => alert(`Value changed to ${value}`)}
            selected={{ label: 'two', value: '2' }}
        >
            <CustomOption label="one" value="1" icon={Icon} />
            <CustomOption label="two" value="2" icon={Icon} />
            <CustomOption label="three" value="3" icon={Icon} />
            <CustomOption label="four" value="4" icon={Icon} />
        </Select>
    ))
