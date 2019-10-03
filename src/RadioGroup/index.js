import React from 'react'
import propTypes from 'prop-types'
import cx from 'classnames'
import { resolve } from 'styled-jsx/css'

import { Radio } from '../Radio'
import { statusPropType } from '../common-prop-types'
import { theme, spacers } from '../theme.js'

const inlineRadio = resolve`
    margin-right: ${spacers.dp12};
`
const stackedRadio = resolve`
    margin-bottom: ${spacers.dp12};
`

const RadioGroup = ({
    label,
    name,
    options,
    className,
    error,
    inline,
    onChange,
    required,
    valid,
    value,
    warning,
}) => {
    const statusProps = { error, warning, valid }
    const radioStyle = inline ? inlineRadio : stackedRadio

    return (
        <>
            {label && (
                <span
                    className={cx('group-label', { ...statusProps, required })}
                >
                    {label}
                </span>
            )}
            <div className={cx('group', { inline })}>
                {options.map(option => (
                    <Radio
                        key={option.value}
                        className={cx(radioStyle.className, className)}
                        name={name}
                        value={option.value}
                        label={option.label}
                        checked={value === option.value}
                        onChange={onChange}
                        {...statusProps}
                    />
                ))}
            </div>
            {radioStyle.styles}
            <style jsx>{`
                .group-label {
                    display: block;
                    font-size: 16px;
                    line-height: 24px;
                    color: ${theme.default};
                    margin-bottom: ${spacers.dp12};
                }

                .group {
                    display: flex;
                    flex-direction: column;
                }

                .group.inline {
                    display: flex;
                    flex-direction: row;
                }

                .group-label.required::after {
                    padding-left: ${spacers.dp4};
                    content: '*';
                }

                .valid {
                    color: ${theme.valid};
                }

                .warning {
                    color: ${theme.warning};
                }

                .error {
                    color: ${theme.error};
                }
            `}</style>
        </>
    )
}

RadioGroup.propTypes = {
    name: propTypes.string.isRequired,
    options: propTypes.arrayOf(
        propTypes.shape({
            label: propTypes.string.isRequired,
            value: propTypes.any.isRequired,
        })
    ).isRequired,
    label: propTypes.string,
    className: propTypes.string,
    error: statusPropType,
    helpText: propTypes.string,
    inline: propTypes.bool,
    onChange: propTypes.func,
    required: propTypes.bool,
    valid: statusPropType,
    value: propTypes.any,
    warning: statusPropType,
}

RadioGroup.defaultProps = {
    inline: true,
}

export { RadioGroup }
