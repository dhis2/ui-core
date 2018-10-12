const { exec } = require('child_process')
const fs = require('fs-extra')
const path = require('path')

function build_docs(exapp, docs) {
    exec('npm run build', { cwd: exapp }, async function(
        error,
        stdout,
        stderr
    ) {
        if (error) {
            console.error(`exec error: ${error}`)
            process.exit(1)
        }

        console.log(`stdout: ${stdout}`)

        if (stderr) {
            console.log(`stderr: ${stderr}`)
        }

        try {
            await fs.copy(path.join(exapp, 'build'), docs)
        } catch (err) {
            console.error('failed to copy docs', err)
            process.exit(1)
        }
    })
}

async function main() {
    const root = process.cwd()
    const exapp = path.join(root, 'example-app')
    const docs = path.join(root, 'docs')

    exec('npm install', { cwd: exapp }, async function(error, stdout, stderr) {
        if (error) {
            console.error(`exec error: ${error}`)
            process.exit(1)
        }

        console.log(`stdout: ${stdout}`)

        if (stderr) {
            console.log(`stderr: ${stderr}`)
        }

        build_docs(exapp, docs)
    })
}

main()
