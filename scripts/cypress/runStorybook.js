const { spawn } = require('child_process')
const { killable } = require('./killable')

let log = true
const DO_LOG = 0
const DO_NOT_LOG = 1

const onMessage = (resolve, reject) => logging => message => {
    if (logging === DO_LOG && log) {
        const linesWithExtraBreak = message.split('\n')
        const lines = linesWithExtraBreak.slice(
            0,
            linesWithExtraBreak.length - 1
        )
        lines.forEach(msg => console.log(msg))
    }

    if (message.match(/Local:.*http:\/\/localhost:5000/)) {
        resolve()
    }

    if (message.match(/Local:.*http:\/\/localhost/)) {
        reject('Port 5000 is already is use by another application')
    }

    if (message.match(/^Something is already running on port/)) {
        reject(message)
    }

    if (message.match(/ERROR in /)) {
        reject(message)
    }

    if (message.match(/Error:/)) {
        reject(message)
    }
}

const onOutput = onData => data => {
    const message = data.toString()
    onData(message)
}

const runStorybook = executions => {
    const promise = new Promise((resolve, reject) => {
        const execution = spawn('yarn', ['start:testing'], {
            cwd: process.cwd(),
        })

        killable(execution)

        const onData = onMessage(() => {
            log = false
            resolve([...executions, execution])
        }, reject)

        execution.stdout.on('data', onOutput(onData(DO_LOG)))
        execution.stderr.on('data', onOutput(onData(DO_NOT_LOG)))
    })

    return promise
}

module.exports = { runStorybook }
