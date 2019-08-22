const { config } = require('@dhis2/cli-style')

module.exports = {
    rules: {
        'react/display-name': false,
    },
    parser: 'babel-eslint',
    extends: ['eslint:recommended', 'plugin:react/recommended', config.eslint],
}
