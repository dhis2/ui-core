import { configure, addDecorator } from '@storybook/react'
import { jsxDecorator } from 'storybook-addon-jsx'
import { CssResetWrapper } from './css-reset-decorator'
import { FrameStylesWrapper } from './frame-styles-decorator'

import 'typeface-roboto'

addDecorator(jsxDecorator)
addDecorator(CssResetWrapper)
addDecorator(FrameStylesWrapper)

function loadStories() {
    const req = require.context('../stories', true, /\.stories\.js$/)
    req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
