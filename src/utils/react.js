import PropTypes from 'prop-types'

export const children = PropTypes.oneOf([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
])
