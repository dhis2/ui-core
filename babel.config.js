const presets = [
    [
        '@babel/env',
        {
            useBuiltIns: 'usage',
        },
    ],
    '@babel/react',
]

const plugins = [['@babel/plugin-proposal-class-properties']]

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
