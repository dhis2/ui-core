import React, { createRef, Component } from 'react'
import propTypes from '@dhis2/prop-types'
import cx from 'classnames'

import { statusPropType, sizePropType } from './common-prop-types.js'
import { Button } from './Button.js'
import { spacers } from './theme.js'
import { Upload } from './icons/Upload.js'
import { StatusIcon } from './icons/Status.js'

/**
 * @module
 * @param {FileInput.PropTypes} props
 * @returns {React.Component}
 *
 * @example import { FileInput } from '@dhis2/ui-core'
 */
class FileInput extends Component {
    ref = createRef()

    handleClick = () => {
        this.ref.current.click()
    }

    handleChange = e => {
        const { onChange } = this.props

        if (onChange) {
            onChange(
                {
                    files: e.target.files,
                    name: this.props.name,
                },
                e
            )
        }

        // reset the file input so it won't prevent on-change
        // if the same file was added in a second attempt
        this.ref.current.value = ''
    }

    render() {
        const {
            className,
            name,
            buttonLabel,
            error,
            valid,
            warning,
            accept,
            multiple,
            small,
            large,
            disabled,
            tabIndex,
        } = this.props

        return (
            <div className={cx('file-input', className)}>
                <input
                    id={name}
                    name={name}
                    type="file"
                    ref={this.ref}
                    onChange={this.handleChange}
                    accept={accept}
                    multiple={multiple}
                    disabled={disabled}
                />
                <Button
                    onClick={this.handleClick}
                    type="button"
                    icon={<Upload />}
                    small={small}
                    large={large}
                    disabled={disabled}
                    tabIndex={tabIndex}
                >
                    {buttonLabel}
                </Button>
                <StatusIcon error={error} valid={valid} warning={warning} />

                <style jsx>{`
                    input {
                        display: none;
                    }

                    .file-input {
                        display: flex;
                        align-items: center;
                        padding-bottom: ${spacers.dp4};
                    }

                    .file-input > :global(svg) {
                        width: 18px;
                        height: 18px;
                        margin-left: ${spacers.dp8};
                    }
                `}</style>
            </div>
        )
    }
}

/**
 * @typedef {Object} PropTypes
 * @static
 *
 * @prop {string} name
 * @prop {function} [onChange] - called with the signature `object, event`
 * @prop {string} [buttonLabel]
 * @prop {string} [className]
 * @prop {string} [tabIndex]
 *
 * @prop {boolean} [disabled]
 *
 * @prop {boolean} [valid] - `valid`, `warning` and `error` are mutually exclusive
 * @prop {boolean} [warning]
 * @prop {boolean} [error]
 *
 * @prop {boolean} [small] - `small` and `large` are mutually exclusive
 * @prop {boolean} [large]
 *
 * @prop {string} [accept=*] - the `accept` attribute of the native file input https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept
 * @prop {boolean} [multiple] - the `multiple` attribute of the native file input https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#multiple
 */
FileInput.propTypes = {
    accept: propTypes.string,
    buttonLabel: propTypes.string,
    className: propTypes.string,

    disabled: propTypes.bool,
    error: statusPropType,

    large: sizePropType,
    multiple: propTypes.bool,
    name: propTypes.string,
    small: sizePropType,
    tabIndex: propTypes.string,
    valid: statusPropType,

    warning: statusPropType,
    onChange: propTypes.func,
}

FileInput.defaultProps = {
    accept: '*',
}

export { FileInput }
