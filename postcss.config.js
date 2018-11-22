const path = require('path')
const fs = require('fs-extra')
const stringHash = require('string-hash')

module.exports = {
    plugins: {
        'postcss-preset-env': {
            browsers: [
                '> 0.5%',
                'last 2 versions',
                'Firefox ESR',
                'ie 11',
                'not dead',
            ],
            autoprefixer: {
                flexbox: 'no-2009',
            },
        },
        'postcss-flexbugs-fixes': {},
        'postcss-modules': {
            getJSON: function(cssFileName, json, outputFileName) {
                const cssName = path.basename(cssFileName, '.css')
                const cssDir = path.dirname(cssFileName).split('src/')[1]
                const jsonFileDir = path.join('./build', cssDir)
                const jsonFileName = path.resolve(
                    jsonFileDir + '/' + cssName + '.json'
                )
                fs.ensureDirSync(jsonFileDir)
                fs.writeFileSync(jsonFileName, JSON.stringify(json))
            },
            generateScopedName: function(name, filename, css) {
                const path = require('path')

                const i = css.indexOf('.' + name)
                const component = path
                    .basename(path.dirname(filename))
                    .toLowerCase()

                const hash = stringHash(css)
                    .toString(36)
                    .substr(0, 5)

                return `_ui_${component}_${name}_${hash}`
            },
        },
        'postcss-rtl': {},
        cssnano: {},
    },
}
