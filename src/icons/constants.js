import { Valid, Warning, Error } from './Status'
import PropTypes from 'prop-types'

export const iconStatuses = {
    DEFAULT: 'default',
    VALID: 'valid',
    WARNING: 'warning',
    ERROR: 'error',
}

export const statusToIcon = {
    [iconStatuses.VALID]: Valid,
    [iconStatuses.WARNING]: Warning,
    [iconStatuses.ERROR]: Error,
}

export const iconStatusPropType = PropTypes.oneOf([
    iconStatuses.DEFAULT,
    iconStatuses.VALID,
    iconStatuses.WARNING,
    iconStatuses.ERROR,
])
