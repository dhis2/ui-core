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
        cssnano: {},
    },
}
