const cucumber = require('cypress-cucumber-preprocessor').default

// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
    on('file:preprocessor', cucumber())
}
