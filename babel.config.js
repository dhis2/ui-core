module.exports = function(api) {
    api.cache.forever()

    let defaultPresets

    if (process.env.BABEL_ENV === 'es') {
        // pure unadulterated js
        defaultPresets = []
    } else {
        defaultPresets = [
            [
                '@babel/preset-env',
                {
                    modules: ['modules'].includes(process.env.BABEL_ENV)
                        ? false
                        : 'commonjs',
                },
            ],
        ]
    }

    return {
        presets: defaultPresets.concat('@babel/preset-react'),
        plugins: [
            '@babel/plugin-proposal-class-properties',
            '@babel/plugin-transform-react-constant-elements',
            '@babel/plugin-proposal-object-rest-spread',
        ],
    }
}
