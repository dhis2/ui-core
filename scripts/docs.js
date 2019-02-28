const { exec } = require('child_process')
const fs = require('fs-extra')
const path = require('path')

function install_docs(docs, build) {
    exec('yarn install', { cwd: docs }, async function(error, stdout, stderr) {
        if (error) {
            console.error(`exec error: ${error}`)
            process.exit(1)
        }

        console.log(`stdout: ${stdout}`)

        if (stderr) {
            console.log(`stderr: ${stderr}`)
        }

        build_docs(docs, build)
    })
}

function build_docs(docs, build) {
    exec('yarn build', { cwd: docs }, async function(error, stdout, stderr) {
        if (error) {
            console.error(`exec error: ${error}`)
            process.exit(1)
        }

        console.log(`stdout: ${stdout}`)

        if (stderr) {
            console.log(`stderr: ${stderr}`)
        }

        fs.copy(path.join(docs, 'build'), build)
    })
}

async function main() {
    const root = process.cwd()
    const docs = path.join(root, 'docs')
    const build = path.join(root, 'build', 'docs')

    install_docs(docs, build)
}

main()
