/** @format */

const fs = require('fs-extra')
const path = require('path')
const { exec } = require('child_process')
const { watch } = require('chokidar')

// transpilers
const babel = require('@babel/core')
const postcss = require('postcss')
const postcssrc = require('postcss-load-config')

const { writeFile } = require('./lib/files.js')

const isProd = process.env.NODE_ENV === 'production'

async function main() {
    const root = process.cwd()

    const JS = '.js'
    const CSS = '.css'

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

            case CSS:
                try {
                    const { plugins } = await postcssrc({ parser: true })
                    const pss = await fs.readFile(filename, 'utf8')
                    const { css } = await postcss(plugins).process(pss, {
                        from: filename,
                        to: distfile,
                        map: 'inline',
                    })

                    console.info(`Writing transpiled ${ext} to '${distfile}'.`)
                    await writeFile(distfile, css)
                } catch (err) {
                    console.error('... CSS preprocessing failed.\n', err)
                }
                break

            default:
                try {
                    console.info(`Copying to '${distfile}'...`)
                    await fs.copy(filename, distfile)
                } catch (err) {
                    console.error('... File copy failed.\n', err)
                }
        }
    }

    watcher.on('change', fileChange)
    watcher.on('add', fileAdd)

    exec('npm run build:files', { cwd: root }, function(error, stdout, stderr) {
        if (error) {
            console.error(`exec error: ${error}`)
            process.exit(1)
        }

        console.log(`stdout: ${stdout}`)

        if (stderr) {
            console.log(`stderr: ${stderr}`)
        }
    })

    console.log('The watch has begun...')
}

main()
