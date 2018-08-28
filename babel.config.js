const presets = [
    ["@babel/env", {
        useBuiltIns: "usage"
    }],
    "@babel/react"
]

const plugins = [
    ["@babel/plugin-proposal-class-properties"]
]

module.exports = {
    env: {
        'production': {
            presets,
            plugins: [
                ...plugins,
                ['transform-react-remove-prop-types',
                    {
                        removeImport: true,
                        additionalLibraries: ['prop-types-exact'],
                        ignoreFilenames: ["node_modules"]
                    }
                ]
            ]
        },
        'development': {
            presets, plugins
        }
    }
}
