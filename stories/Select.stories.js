import React from 'react'
import { storiesOf } from '@storybook/react'
import cx from 'classnames'
import { Select, Option } from '../src'

// eslint-disable-next-line react/prop-types
const CustomOption = ({ value, label, active, onClick }) => (
    <li className={cx({ active })}>
        <a
            onClick={e => {
                e.stopPropagation()
                onClick({ value, label })
            }}
        >
            {label}
        </a>

        <style jsx>{`
            a {
                color: red;
                font-size: 2em;
                display: block;
                cursor: pointer;
            }

            .active a {
                background: blue;
                cursor: auto;
            }

            a:hover {
                background: black;
            }
        `}</style>
    </li>
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
