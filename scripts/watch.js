const fs = require('fs-extra')
const path = require('path')
const { exec } = require('child_process')
const { watch } = require('chokidar')

// transpilers
const babel = require('@babel/core')

const { writeFile } = require('./lib/files.js')

const isProd = process.env.NODE_ENV === 'production'

async function main() {
    const root = process.cwd()

    const JS = '.js'

    const src = path.join(root, 'src')
    const dest = path.join(root, 'build')

    try {
        await fs.ensureDir(dest)
    } catch (err) {
        console.error(`Could not create ${dest}, exiting...`, err)
        process.exit(1)
    }

    function dist(name) {
        return name.replace(src, dest)
    }

    // env runtime debug statements
    console.info('mode', process.env.NODE_ENV)
    console.info('isProd?', isProd)
    console.info('args', process.argv)
    console.info('cwd', process.cwd())
    console.info('src', src)
    console.info('dest', dest)

    const watcher = watch(src, {
        awaitWriteFinish: {
            stabilityThreshold: 200,
            pollInterval: 100,
        },
    })

    function fileChange(path, stats) {
        console.log(`${path} changed size to ${stats.size}`)
        handler(path)
    }

    function fileAdd(path, stats) {
        handler(path)
    }

    async function handler(filename) {
        const ext = path.extname(filename)
        const distfile = dist(filename)

        switch (ext) {
            case JS:
                babel.transformFile(
                    filename,
                    {
                        sourceMaps: 'inline',
                    },
                    async function(err, res) {
                        if (err) {
                            console.error(
                                `Failed to write compiled ${filename}`,
                                err
                            )
                            return
                        }

                        await writeFile(distfile, res.code)
                        console.info(
                            `Writing transpiled ${ext} to '${distfile}'.`
                        )
                    }
                )
                break

            default:
                try {
                    console.info(`Copying to '${distfile}'...`)
                    await fs.copy(filename, distfile)
                } catch (err) {
                    console.error('... File copy failed.\n', err)
                }
                break
        }
    }

    watcher.on('change', fileChange)
    watcher.on('add', fileAdd)

    console.log('The watch has begun...')
}

main()
