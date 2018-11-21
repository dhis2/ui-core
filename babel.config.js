const presets = [
    '@babel/react',
    [
        '@babel/preset-env',
        {
            modules: false,
        },
    ],
]

const plugins = [
    '@babel/plugin-proposal-class-properties',
    [
        '@babel/plugin-transform-runtime',
        {
            useESModules: true,
            corejs: 2,
        },
    ],
]

module.exports = {
    env: {
        production: {
            presets,
            plugins,
        },
        development: {
            presets,
            plugins,
        },
    },
}
