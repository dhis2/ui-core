const { config } = require('@dhis2/cli-style')

module.exports = {
    parser: 'babel-eslint',
    extends: ['eslint:recommended', 'plugin:react/recommended', config.eslint],
    env: { es6: true },
    globals: {
        Cypress: 'readonly',
        cy: 'readonly',
    },
}
