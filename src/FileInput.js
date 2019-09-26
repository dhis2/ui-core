import React, { createRef, PureComponent } from 'react'
import propTypes from '@dhis2/prop-types'
import cx from 'classnames'

import { statusPropType, sizePropType } from './common-prop-types.js'
import { Button } from './Button.js'
import { spacers } from './theme.js'
import { Upload } from './icons/Upload.js'
import { StatusIconNoDefault } from './icons/Status.js'

/**
 * @module
 * @param {FileInput.PropTypes} props
 * @returns {React.Component}
 *
 * @example import { FileInput } from '@dhis2/ui-core'
 */
class FileInput extends PureComponent {
    ref = createRef()

    onClick = () => {
        this.ref.current.click()
    }

    onChange = () => {
        this.props.onChange(this.ref.current.files)
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
            name,
        } = this.props

        return (
            <div className={cx('file-input', className)}>
                <input
                    id={name}
                    name={name}
                    type="file"
                    ref={this.ref}
                    onChange={this.onChange}
                    accept={accept}
                    multiple={multiple}
                    disabled={disabled}
                />
                <Button
                    onClick={this.onClick}
                    type="button"
                    icon={<Upload />}
                    small={small}
                    large={large}
                    disabled={disabled}
                    tabIndex={tabIndex}
                >
                    {buttonLabel}
                </Button>
                <StatusIconNoDefault
                    error={error}
                    valid={valid}
                    warning={warning}
                />

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
 * @prop {function} onChange
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
    name: propTypes.string.isRequired,
    onChange: propTypes.func.isRequired,
    buttonLabel: propTypes.string,

    className: propTypes.string,
    tabIndex: propTypes.string,

    error: statusPropType,
    valid: statusPropType,
    warning: statusPropType,
    small: sizePropType,
    large: sizePropType,
    disabled: propTypes.bool,

    accept: propTypes.string,
    multiple: propTypes.bool,
}

FileInput.defaultProps = {
    accept: '*',
}

export { FileInput }
