/** @format */

const fs = require('fs-extra')
const path = require('path')

const whitelist = ['.json', '.svg', '.css', '.js', '.png', '.ico']

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

module.exports = collectFiles
