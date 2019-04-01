import PropTypes from 'prop-types'
import React, { Fragment } from 'react'
import css from 'styled-jsx/css'
import cx from 'classnames'

import { statusToIcon } from '../../icons/constants'
import { createIcon } from '../../icons/helpers'

export const TrailIcon = ({ status, trail }) =>
    status !== 'default' ? createIcon(statusToIcon[status], status) : trail

TrailIcon.propTypes = {
    status: PropTypes.string,
    fn: PropTypes.func,
}

TrailIcon.defaultProps = {
    trail: '',
}
