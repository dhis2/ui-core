/** @format */

const fs = require('fs-extra')
const path = require('path')

const { writeFile } = require('./lib/files.js')

async function main() {
    const root = process.cwd()
    const dest = path.join(root, 'build')

    const pkg = require(path.join(root, 'package.json'))
    const cfg = require(path.join(root, 'copy-files.config.js'))

    try {
        await fs.ensureDir(dest)
    } catch (err) {
        console.error(`Could not create ${dest}, exiting...`, err)
        process.exit(1)
    }

    try {
        for (let asset of cfg.assets) {
            const from = path.join(root, asset.from)
            const to = path.join(root, asset.to)
            const base = path.basename(from)

            console.info(`Copy '${base}' to '${to}'...`)
            await fs.ensureDir(to)
            await fs.copy(from, to)
        }
    } catch (err) {
        console.error('Failure when copying assets', err)
    }
}

main()
