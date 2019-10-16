const createExit = execution => (code = 0) => {
    execution.kill('SIGTERM')
    process.exit(code)
}

const killable = execution => {
    const exit = createExit(execution)

    process.on('exit', exit)
    process.on('SIGINT', exit)
    process.on('SIGUSR1', exit)
    process.on('SIGUSR2', exit)

    return execution
}

module.exports = { killable }
