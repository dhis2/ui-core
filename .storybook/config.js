import { configure } from '@storybook/react'

function loadStories() {
    require('../stories/core/SelectField.js')
}

configure(loadStories, module)
