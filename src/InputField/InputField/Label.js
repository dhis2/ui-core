import React from 'react'
import PropTypes from 'prop-types'
import css from 'styled-jsx/css'
import cx from 'classnames'

import { inputFontSizeValue } from '../../forms/constants'
import { colors, theme } from '../../theme'

const styles = css`
    .label {
        color: ${colors.grey700};
        display: block;
        font-size: ${inputFontSizeValue};
        padding: 0 10px 0 2px;
        pointer-events: none;
        position: absolute;
        transform-origin: top left;
        transform: translate(-2px, 0) scale(1);
        transition: all 0.1s;
        white-space: nowrap;
    }

    .label.outlined {
        background: white;
    }

    .label.required::after {
        content: '*';
    }

    .label.filled.focused {
        color: ${theme.secondary600};
    }

    .label.filled.shrink {
        transform: translate(-2px, -12px) scale(0.75);
    }

    .label.filled.dense.shrink {
        transform: translate(-2px, -8px) scale(0.75);
    }

    .label.filled.has-icon {
        left: 24px;
    }

    .label.filled.shrink.has-icon {
        left: 24px;
    }

    .label.outlined.focused {
        color: ${theme.secondary600};
    }

    .label.outlined.shrink {
        transform: translate(-2px, -24px) scale(0.75);
    }

    .label.outlined.shrink.dense {
        transform: translate(-2px, -18px) scale(0.75);
    }

    .label.outlined.has-icon {
        left: 24px;
    }

    .label.outlined.shrink.has-icon {
        left: 8px;
    }

    /*
    * label status states
    */
    .icon-valid,
    .label.filled.valid,
    .label.outlined.valid {
        color: ${colors.blue600};
    }

    .icon-warning,
    .label.filled.warning,
    .label.outlined.warning {
        color: ${colors.yellow500};
    }

    .icon-error,
    .label.filled.error,
    .label.outlined.error {
        color: ${colors.red500};
    }
`

const createClassName = props =>
    cx('label', {
        shrink: props.isShrinked,
        focused: props.isFocused,
        required: props.isRequired,
        disabled: props.isDisabled,
        [props.status]: true,
        [props.size]: true,
        [props.kind]: true,
        'has-icon': props.hasIcon,

        [typeof className === 'string' ? props.className : '']:
            typeof className === 'string' && !!props.className,
    })

export const Label = props => {
    return (
        <label
            className={createClassName(props)}
            style={props.styles instanceof Object ? props.styles : {}}
        >
            {props.label}
            <style jsx>{styles}</style>
        </label>
    )
}

Label.propTypes = {
    label: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    kind: PropTypes.string.isRequired,
    isShrinked: PropTypes.bool.isRequired,
    isFocused: PropTypes.bool.isRequired,
    isDisabled: PropTypes.bool.isRequired,
    isRequired: PropTypes.bool.isRequired,
    hasIcon: PropTypes.bool.isRequired,
    className: PropTypes.string,
    styles: PropTypes.object,
}

Label.defaultProps = {
    className: '',
    styles: {},
}
