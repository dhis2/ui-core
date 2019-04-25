import propTypes from 'prop-types'
import { colors, theme } from '../theme'

export const iconStatuses = {
    DEFAULT: 'default',
    VALID: 'valid',
    WARNING: 'warning',
    ERROR: 'error',
    LOADING: 'loading',
}

export const statusColors = {
    [iconStatuses.DEFAULT]: colors.grey500,
    [iconStatuses.VALID]: theme.valid,
    [iconStatuses.WARNING]: theme.warning,
    [iconStatuses.ERROR]: theme.error,
    [iconStatuses.LOADING]: colors.blue600,
}

export const iconStatusPropType = propTypes.oneOf([
    iconStatuses.DEFAULT,
    iconStatuses.VALID,
    iconStatuses.WARNING,
    iconStatuses.ERROR,
    iconStatuses.LOADING,
])
