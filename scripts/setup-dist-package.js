const fs = require('fs-extra')
const path = require('path')

const { writeFile } = require('./lib/files.js')

async function main () {
    const root = process.cwd()
    const dest = path.join(root, 'build')

    const pkg = require(path.join(root, 'package.json'))

    try {
        await fs.ensureDir(dest)
    } catch (err) {
        console.error(`Could not create ${dest}, exiting...`, err)
        process.exit(1)
    }

    console.info(`Create distributable 'package.json'`)
    try {
        const newPkgPath = path.join(dest, 'package.json')
        const distPkg = JSON.stringify({
            ...pkg,
            private: false
        }, null, 2)

        await writeFile(newPkgPath, distPkg)
    } catch (err) {
        console.error(`'package.json' packaging error`, err)
    }
}

main()
