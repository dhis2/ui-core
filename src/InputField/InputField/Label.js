import PropTypes from 'prop-types'
import React from 'react'
import css from 'styled-jsx/css'
import cx from 'classnames'

import { Fieldset } from './Fieldset'
import { colors, theme } from '../../theme'
import { innerSpacingSides, inputFontSizeValue } from '../../forms/constants'

const styles = css`
    .label {
        color: ${colors.grey700};
        display: inline-block;
        font-size: ${inputFontSizeValue};
        line-height: 19px;
        pointer-events: none;
        position: absolute;
        transition: all 0.1s;
        white-space: nowrap;
    }

    .label.outlined {
        transform: translate(-2px, 22px);
        padding: 0 10px 0 2px;
    }

    .label.outlined.dense {
        transform: translate(-2px, 18px);
    }

    .label.filled {
        display: block;
        left: 0;
        position: absolute;
        top: 0;
        transform: translate(${innerSpacingSides}, 20px);
    }

    .label.filled.dense {
        transform: translate(${innerSpacingSides}, 14px);
    }

    .label.focused,
    .label.has-value {
        font-size: 12px;
    }

    .label.filled.focused,
    .label.filled.has-value {
        transform: translate(${innerSpacingSides}, 8px);
    }

    .label.filled.dense.focused,
    .label.filled.dense.has-value {
        transform: translate(${innerSpacingSides}, 6px);
    }

    .label.outlined.focused,
    .label.outlined.has-value {
        position: static;
        transform: translate(0, 0);
    }

    .label.required::after {
        content: '*';
    }

    .label.filled.focused {
        color: ${theme.secondary600};
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
        'has-value': props.hasValue,

        [typeof className === 'string' ? props.className : '']:
            typeof className === 'string' && !!props.className,
    })

export const Label = props => {
    const renderedLabel = (
        <label
            className={createClassName(props)}
            style={props.styles instanceof Object ? props.styles : {}}
        >
            {props.label}
            <style jsx>{styles}</style>
        </label>
    )

    if (!props.isFilled) {
        return (
            <Fieldset
                kind={props.kind}
                status={props.status}
                isFocused={props.isFocused}
                hasValue={props.hasValue}
            >
                {renderedLabel}
            </Fieldset>
        )
    }

    return renderedLabel
}

Label.propTypes = {
    label: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    kind: PropTypes.string.isRequired,
    isShrinked: PropTypes.bool.isRequired,
    isFilled: PropTypes.bool.isRequired,
    isFocused: PropTypes.bool.isRequired,
    isDisabled: PropTypes.bool.isRequired,
    isRequired: PropTypes.bool.isRequired,
    isOutlined: PropTypes.bool.isRequired,
    hasValue: PropTypes.bool.isRequired,
    hasIcon: PropTypes.bool.isRequired,
    className: PropTypes.string,
    styles: PropTypes.object,
}

Label.defaultProps = {
    className: '',
    styles: {},
}
