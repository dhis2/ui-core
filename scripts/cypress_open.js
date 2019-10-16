const { runStorybook } = require('./cypress/runStorybook')
const { cypressOpen } = require('./cypress/cypressOpen')

Promise.resolve([])
    .then(runStorybook)
    .then(cypressOpen)

    .catch(err => {
        err && console.error(err)
        process.exit(1)
    })
