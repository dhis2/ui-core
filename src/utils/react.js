import propTypes from 'prop-types'

export const children = propTypes.oneOf([
    propTypes.node,
    propTypes.arrayOf(propTypes.node),
])
