import { configure, addDecorator } from '@storybook/react'
import { jsxDecorator } from 'storybook-addon-jsx'
import { withPropsTable } from 'storybook-addon-react-docgen'

import 'typeface-roboto'

addDecorator(jsxDecorator)
addDecorator(withPropsTable)

function loadStories() {
    const req = require.context('../stories', true, /\.stories\.js$/)
    req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
