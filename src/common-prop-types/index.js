import { mutuallyExclusive } from '@dhis2/prop-types'
import propTypes from 'prop-types'

export const statusPropType = mutuallyExclusive(
    ['valid', 'warning', 'error'],
    propTypes.bool
)

export const buttonVariantPropType = mutuallyExclusive(
    ['primary', 'secondary', 'destructive'],
    propTypes.bool
)

export const sizePropType = mutuallyExclusive(
    ['small', 'large'],
    propTypes.bool
)
