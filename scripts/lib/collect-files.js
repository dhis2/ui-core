const fs = require('fs-extra')
const path = require('path')

function blacklisted(el, bl) {
    if (bl.length === 0) {
        return false
    }

    for (rule of bl) {
        let re = RegExp(rule)
        if (re.test(el)) {
            console.info(`"${el}" is blacklisted by "${rule}"`)
            return true
        }
    }

    return false
}

function whitelisted(el, wl) {
    if (wl.length === 0) {
        return true
    }

    for (rule of wl) {
        let re = RegExp(rule)
        if (re.test(el)) {
            console.info(`"${el}" is whitelisted by "${rule}"`)
            return true
        }
    }

    return false
}

function collect(target, { blacklist = [], whitelist = [] }) {
    try {
        const files = fs.readdirSync(target)

        return files
            .map(file => {
                const fullPath = path.join(target, file)

                if (blacklisted(fullPath, blacklist)) {
                    return
                }

                const stat = fs.statSync(fullPath)

                if (stat.isDirectory()) {
                    return collect(fullPath, { blacklist, whitelist })
                } else {
                    if (whitelisted(fullPath, whitelist)) {
                        return fullPath
                    } else {
                        return
                    }
                }
            })
            .filter(f => !!f)
            .reduce((a, b) => a.concat(b), [])
    } catch (err) {
        console.error(`Could not collect files from "${target}"`, err)
        process.exit(1)
    }
}

module.exports = collect
