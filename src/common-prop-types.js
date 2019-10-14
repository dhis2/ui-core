import propTypes from '@dhis2/prop-types'

export const buttonVariantPropType = propTypes.mutuallyExclusive(
    ['primary', 'secondary', 'destructive'],
    propTypes.bool
)

export const sizePropType = propTypes.mutuallyExclusive(
    ['small', 'large'],
    propTypes.bool
)
