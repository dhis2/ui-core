import { configure, addDecorator, setAddon } from '@storybook/react'
import { jsxDecorator } from 'storybook-addon-jsx'
import { withPropsTable } from 'storybook-addon-react-docgen'
import { CssResetWrapper } from './css-reset-decorator'
import { FrameStylesWrapper } from './frame-styles-decorator'
import chaptersAddon from 'react-storybook-addon-chapters'

import 'typeface-roboto'

// specially added addons
setAddon(chaptersAddon)

// decorators
addDecorator(jsxDecorator)
addDecorator(withPropsTable)
addDecorator(CssResetWrapper)
addDecorator(FrameStylesWrapper)

function loadStories() {
    const req = require.context('../stories', true, /\.(stories|chapters)\.js$/)
    req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
