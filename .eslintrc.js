const { config } = require('@dhis2/cli-style')

module.exports = {
    parser: 'babel-eslint',
    extends: ['eslint:recommended', 'plugin:react/recommended', config.eslint],
    settings: {
        react: {
            version: '16.3',
        },
        propWrapperFunctions: [
            'forbidUnknowProps',
            { property: 'forbidUnknowProps', object: 'propTypes' },
        ],
    },
}
