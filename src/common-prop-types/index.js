import { mutuallyExclusive } from '@dhis2/prop-types'
import propTypes from 'prop-types'

export const statusPropType = mutuallyExclusive(
    ['success', 'warning', 'critical'],
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

export const iconPropType = {
    className: propTypes.string,
}
