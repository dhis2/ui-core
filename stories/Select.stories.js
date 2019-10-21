import React from 'react'
import { storiesOf } from '@storybook/react'
import { Select } from '../src'

const longLabel =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas quibusdam est debitis odio, earum explicabo error magni. Expedita voluptatem accusantium nostrum minus, voluptate mollitia placeat perspiciatis quibusdam dicta, fugiat dolor quisquam alias, impedit commodi? Inventore, laboriosam, molestias. Non quod odit eum adipisci, tempora rerum perferendis, incidunt consectetur nesciunt. Qui voluptatibus asperiores dicta doloremque est vitae tempora sapiente dignissimos maiores saepe, animi necessitatibus modi laboriosam quae blanditiis voluptatem recusandae. Praesentium ipsum dolores voluptatum repudiandae cumque, tempore tempora, excepturi numquam atque reiciendis suscipit alias? Architecto dignissimos enim blanditiis laborum'

storiesOf('Select', module)
    .add('Default', () => (
        <Select
            selected={{}}
            onChange={() => {}}
            input={<div>Input text</div>}
            menu={<div>Dropdown items</div>}
        />
    ))
    .add('Input overflow', () => (
        <Select
            selected={{}}
            onChange={() => {}}
            input={<div>{longLabel}</div>}
            menu={<div>Dropdown items</div>}
        />
    ))
    .add('Dropdown overflow', () => (
        <Select
            selected={{}}
            onChange={() => {}}
            input={<div>Input text</div>}
            menu={<div>{longLabel}</div>}
        />
    ))
    .add('Maximum height', () => (
        <Select
            selected={{}}
            onChange={() => {}}
            maxHeight="75px"
            input={<div>Input text</div>}
            menu={<div>{longLabel}</div>}
        />
    ))
