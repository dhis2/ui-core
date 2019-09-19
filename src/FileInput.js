import React, { createRef, PureComponent } from 'react'
import propTypes from 'prop-types'
import cx from 'classnames'

import { statusPropType, sizePropType } from './common-prop-types.js'
import { Button } from './Button.js'
import { spacers } from './theme.js'
import { Upload } from './icons/Upload.js'
import { StatusIconNoDefault } from './icons/Status.js'

class FileInput extends PureComponent {
    ref = createRef()

    onClick = () => {
        this.ref.current.click()
    }

    onChange = () => {
        this.props.onChange(this.ref.current.files)
        this.ref.current.value = ''
    }

    render() {
        const {
            className,
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

FileInput.propTypes = {
    onChange: propTypes.func.isRequired,
    name: propTypes.string.isRequired,
    buttonLabel: propTypes.string,
    helpText: propTypes.string,
    validationText: propTypes.string,

    className: propTypes.string,
    placeholder: propTypes.string,
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
