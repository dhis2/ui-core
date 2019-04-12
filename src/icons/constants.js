import propTypes from 'prop-types'
import { colors } from '../theme'

export const iconStatuses = {
    DEFAULT: 'default',
    VALID: 'valid',
    WARNING: 'warning',
    ERROR: 'error',
    LOADING: 'loading',
}

export const statusColors = {
    [iconStatuses.DEFAULT]: colors.grey500,
    [iconStatuses.VALID]: colors.blue600,
    [iconStatuses.WARNING]: colors.yellow500,
    [iconStatuses.ERROR]: colors.red500,
    [iconStatuses.LOADING]: colors.blue600,
}

export const iconStatusPropType = propTypes.oneOf([
    iconStatuses.DEFAULT,
    iconStatuses.VALID,
    iconStatuses.WARNING,
    iconStatuses.ERROR,
    iconStatuses.LOADING,
])
