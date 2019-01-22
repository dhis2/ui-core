const fs = require('fs-extra')

async function readFile(target) {
    try {
        return await fs.readFile(target, {
            encoding: 'utf8',
        })
    } catch (err) {
        console.error('... File read failed!\n', err)
    }
}

async function writeFile(target, content) {
    try {
        await fs.ensureFile(target)
        await fs.writeFile(target, content)
    } catch (err) {
        console.error('... File write failed!\n', err)
    }
}

module.exports = {
    writeFile,
    readFile,
}
