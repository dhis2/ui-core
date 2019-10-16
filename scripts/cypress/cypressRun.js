const { spawn } = require('child_process')
const { killable } = require('./killable')

const cypressRun = executions => {
    return new Promise((resolve, reject) => {
        const execution = spawn(
            'yarn',
            ['cypress:ci', ...process.argv.slice(2)],
            { cwd: process.cwd() }
        )

        killable(execution)

        execution.stdout.on('data', data => {
            const message = data.toString()
            const linesWithExtraBreak = message.split('\n')
            const lines = linesWithExtraBreak.slice(
                0,
                linesWithExtraBreak.length - 1
            )
            lines.forEach(msg => console.log(msg))

            if (message.match(/All specs passed!/)) {
                resolve([...executions])
            }

            if (message.match(/Cannot continue running tests/)) {
                reject()
            }

            if (message.match(/\d of \d failed/)) {
                reject()
            }
        })
    })
}

module.exports = { cypressRun }
