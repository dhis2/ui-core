import PropTypes from 'prop-types'
import { colors } from '../theme'

export const iconStatuses = {
    DEFAULT: 'default',
    VALID: 'valid',
    WARNING: 'warning',
    ERROR: 'error',
}

export const statusColors = {
    [iconStatuses.DEFAULT]: colors.grey500,
    [iconStatuses.VALID]: colors.blue600,
    [iconStatuses.WARNING]: colors.yellow500,
    [iconStatuses.ERROR]: colors.red500,
}

export const iconStatusPropType = PropTypes.oneOf([
    iconStatuses.DEFAULT,
    iconStatuses.VALID,
    iconStatuses.WARNING,
    iconStatuses.ERROR,
])
