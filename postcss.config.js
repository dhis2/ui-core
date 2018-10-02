/** @format */

const path = require('path')
const fs = require('fs-extra')

/** @format */
module.exports = {
    plugins: {
        'postcss-import': {},
        'postcss-nested': {},
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
        'postcss-rtl': {},
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
        },
        cssnano: {},
    },
}
