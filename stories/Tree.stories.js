import React from 'react'
import { storiesOf } from '@storybook/react'

import { Chevron } from '../src/icons/Chevron'
import { Checkbox } from '../src/Checkbox'

const say = something => () => alert(something)

storiesOf('Tree', module).add('Tree', () => (
    <Tree>
        <Tree.Label>
            <Chevron />
            <Checkbox label="Tree label" name="l1" onClick={say('l1')} />
        </Tree.Label>
    </Tree>
))
