const fs = require('fs-extra')
const path = require('path')

const { writeFile } = require('./lib/files.js')

async function main () {
    const root = process.cwd()
    const dest = path.join(root, 'dist')

    const pkg = require(path.join(root, 'package.json'))

    try {
        await fs.ensureDir(dest)
    } catch (err) {
        console.error(`Could not create ${dest}, exiting...`, err)
        process.exit(1)
    }

    console.info(`Create dist 'package.json'`)
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

    try {
        const mdi = path.join(dest, 'theme', 'fonts', 'material-design-icons')
        const rubik = path.join(dest, 'theme', 'fonts', 'rubik')

        console.info('Copy `material-design-icons`...')
        await fs.ensureDir(mdi)
        await fs.copy(
            path.join(root, 'node_modules', 'material-design-icons', 'iconfont'),
            mdi
        )

        console.info('Copy `typeface-rubik`...')
        await fs.ensureDir(rubik)
        await fs.copy(
            path.join(root, 'node_modules', 'typeface-rubik'),
            rubik
        )
    } catch (err) {
        console.error('Failure when copying fonts', err)
    }
}

main()
