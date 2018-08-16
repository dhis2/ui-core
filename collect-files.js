#!/usr/bin/env node
const fs = require('fs-extra')
const path = require('path')

const src = path.join(__dirname, 'src')
const dest = path.join(__dirname, 'dist')

const whitelist = [
    '.svg', '.jpg', '.png', '.ico', '.json'
]

function collectFiles(target) {
    const files = fs.readdirSync(target)

    return files
        .map(file => {
            const fullPath = path.join(target, file)
            const stat = fs.statSync(fullPath)

            if (stat.isDirectory()) {
                return collectFiles(fullPath)
            } else {
                return fullPath
            }
        })
        .reduce((a, b) => a.concat(b), [])
        .filter(f => whitelist.includes(path.extname(f)))
}

const files = collectFiles(src)
    .map(f => path.relative(__dirname, f))
    .map(f => path.parse(f))
    .map(f => {
        const file = f.base
        const dir = f.dir.replace('src', 'dist')

        fs.ensureDirSync(dir)
        const sf = path.join(f.dir, f.base)
        const df = path.join(dir, f.base)
        console.log(`Copy ${f.base}...`)
        fs.copySync(sf, df)
    })

const mdi = path.join(__dirname, 'dist', 'theme', 'fonts', 'material-design-icons')
fs.ensureDirSync(mdi)

const rubik = path.join(__dirname, 'dist', 'theme', 'fonts', 'rubik')
fs.ensureDirSync(rubik)

console.info('Copy `material-design-icons`...')
fs.copySync(
    path.join(__dirname, 'node_modules', 'material-design-icons', 'iconfont'),
    mdi
)

console.info('Copy `typeface-rubik`...')
fs.copySync(
    path.join(__dirname, 'node_modules', 'typeface-rubik'),
    rubik
)

console.info('Copy `package.json`...')
fs.copySync(
    path.join(__dirname, 'package.json'),
    path.join(__dirname, 'dist', 'package.json')
)
