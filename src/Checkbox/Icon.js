import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import css from 'styled-jsx/css'

import { colors, theme } from '../theme'
import { Indeterminate, Checked, Unchecked } from '../icons/Checkbox'

const icons = css.resolve`
    svg {
        height: 24px;
        width: 24px;
        fill: ${theme.default};
    }

    .checked {
        fill: ${colors.teal400};
    }

    .disabled {
        fill: ${theme.disabled};
    }

    .error {
        fill: ${theme.error};
    }

    .valid {
        fill: ${theme.valid};
    }

    .warning {
        fill: ${theme.warning};
    }
`

export const Icon = ({
    checked,
    disabled,
    valid,
    error,
    warning,
    indeterminate,
}) => {
    const classes = cx(icons.className, {
        checked: checked && !valid && !error && !warning,
        disabled,
        valid,
        error,
        warning,
    })

    return (
        <Fragment>
            {indeterminate ? (
                <Indeterminate className={classes} />
            ) : checked ? (
                <Checked className={classes} />
            ) : (
                <Unchecked className={classes} />
            )}

            {icons.styles}
        </Fragment>
    )
}

Icon.propTypes = {
    checked: PropTypes.bool.isRequired,
    disabled: PropTypes.bool.isRequired,
    valid: PropTypes.bool.isRequired,
    error: PropTypes.bool.isRequired,
    warning: PropTypes.bool.isRequired,
    indeterminate: PropTypes.bool.isRequired,
}
