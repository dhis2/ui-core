import PropTypes from 'prop-types'

/**
 * Variants
 * ========
 */
export const inputKinds = {
    FILLED: 'filled',
    OUTLINED: 'outlined',
}

export const inputKindPropTypes = PropTypes.oneOf([
    inputKinds.FILLED,
    inputKinds.OUTLINED,
])

export const inputSizes = {
    DEFAULT: 'default',
    DENSE: 'dense',
}

export const inputSizesPropTypes = PropTypes.oneOf([
    inputSizes.DEFAULT,
    inputSizes.DENSE,
])

/**
 * Box model values
 * ================
 */
export const heightDefault = '56px'
export const heightDense = '44px'
export const innerSpacingSides = '16px'

/**
 * Font sizes
 * ==========
 */
export const inputFontSizeValue = '16px'
