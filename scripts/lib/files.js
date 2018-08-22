const fs = require('fs-extra')

async function writeFile(target, content) {
    try {
        await fs.ensureFile(target)
        await fs.writeFile(target, content)
    } catch (err) {
        console.error('... File write failed!\n', err)
    }
}

module.exports = {
    writeFile
}
