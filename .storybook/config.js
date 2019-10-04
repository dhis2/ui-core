import { configure, addDecorator } from '@storybook/react'
import { jsxDecorator } from 'storybook-addon-jsx'
import { withPropsTable } from 'storybook-addon-react-docgen'
import { CssResetWrapper } from './css-reset-decorator'
import { FrameStylesWrapper } from './frame-styles-decorator'

import 'typeface-roboto'

addDecorator(jsxDecorator)
addDecorator(withPropsTable)
addDecorator(CssResetWrapper)
addDecorator(FrameStylesWrapper)

const includeStateful = 'STORYBOOK_INCLUDE_STATEFUL' in process.env

function loadStories() {
    const req = require.context('../stories', false, /\.stories\.js$/)
    req.keys().forEach(filename => req(filename))
}

function loadStoriesWithStateful() {
    const req = require.context('../stories', true, /\.stories\.js$/)
    req.keys().forEach(filename => req(filename))
}

configure(includeStateful ? loadStoriesWithStateful : loadStories, module)
