const fs = require('fs-extra')
const path = require('path')

const postcss = require('postcss')
const cssDeclarationSorter = require('css-declaration-sorter')

const { writeFile } = require('./lib/files.js')
const collect = require('./lib/collect-files.js')

async function main() {
    const root = process.cwd()

    const src = path.join(root, 'src')
    const dest = path.join(root, 'build')

    const files = collect(src, {
        blacklist: ['defaults\\/colors\\.css'],
        whitelist: ['\\.css'],
    })

    try {
        await fs.ensureDir(dest)
    } catch (err) {
        console.error(`Could not create ${dest}, exiting...`, err)
        process.exit(1)
    }

    function dist(name) {
        return name.replace(src, dest)
    }

    async function handler(filename) {
        const ext = path.extname(filename)

        try {
            const pss = await fs.readFile(filename, 'utf8')
            const { css } = await postcss([
                cssDeclarationSorter({
                    order: 'smacss',
                }),
            ]).process(pss, {
                from: filename,
                to: filename,
                map: false,
            })

            console.info(`Writing transpiled ${ext} to '${filename}'.`)
            await writeFile(filename, css)
        } catch (err) {
            console.error('... CSS preprocessing failed.\n', err)
        }
    }

    console.log(files)
    for (const file of files) {
        await handler(file)
    }

    console.log('The sort is just so...')
}

main()
