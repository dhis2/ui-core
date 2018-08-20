const presets = [
    ["@babel/env", {
        useBuiltIns: "usage"
    }],
    "@babel/react"
];

const plugins = [
    ["@babel/plugin-proposal-class-properties"],
    ['transform-react-remove-prop-types',
        {
            removeImport: true,
            additionalLibraries: ['prop-types-exact'],
            ignoreFilenames: ["node_modules"]
        }
    ]
]

module.exports = { presets, plugins };
