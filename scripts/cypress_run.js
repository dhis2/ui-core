const { runStorybook } = require('./cypress/runStorybook')
const { cypressRun } = require('./cypress/cypressRun')

Promise.resolve([])
    .then(runStorybook)
    .then(cypressRun)

    .then(() => process.exit(0))
    .catch(err => {
        err && console.error(err)
        process.exit(1)
    })
