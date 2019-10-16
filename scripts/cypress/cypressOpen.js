const { spawn } = require('child_process')
const { killable } = require('./killable')

const cypressOpen = executions => {
    const { stdin, stdout, stderr } = process
    const execution = spawn('yarn', ['cypress:browser'], {
        cwd: process.cwd(),
        stdio: [stdin, stdout, stderr],
    })

    killable(execution)

    return Promise.resolve(executions)
}

module.exports = { cypressOpen }
