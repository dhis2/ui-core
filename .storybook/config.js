import { configure, addDecorator } from '@storybook/react'
import { jsxDecorator } from 'storybook-addon-jsx'
import { CssResetWrapper } from './css-reset-decorator'
import { FrameStylesWrapper } from './frame-styles-decorator'

import 'typeface-roboto'

addDecorator(jsxDecorator)
addDecorator(CssResetWrapper)
addDecorator(FrameStylesWrapper)

const isTesting = 'STORYBOOK_TESTING' in process.env

function loadStories() {
    let req

    // The arguments passed to require.context must be literals
    if (isTesting) {
        req = require.context('../cypress/stories', true, /\.stories\.js$/)
    } else {
        req = require.context('../stories', true, /\.stories\.js$/)
    }

    req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
