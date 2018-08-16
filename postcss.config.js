module.exports = {
    sourceMap: 'inline',
    plugins: {
        'postcss-import': {},
        'postcss-nested': {},
        'postcss-preset-env': {
            browsers: [
                '>1%',
                'last 4 versions',
                'Firefox ESR',
                'not ie < 9', // react doesn't support ie8 anyway
            ],
            autoprefixer: {
                flexbox: 'no-2009'
            },
        },
        'postcss-flexbugs-fixes': {},
        'postcss-rtl': {},
        'cssnano': {}
    }
}
