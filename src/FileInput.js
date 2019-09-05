import React, { createRef, PureComponent } from 'react'
import propTypes from 'prop-types'
import cx from 'classnames'
import { instanceOfComponent } from '@dhis2/prop-types'

import { statusPropType, sizePropType } from './common-prop-types.js'
import { Button } from './Button.js'
import { Help } from './Help.js'
import { spacers, colors } from './theme.js'
import { Upload } from './icons/Upload.js'
import { StatusIconNoDefault } from './icons/Status.js'
import { FileList } from './FileInput/FileList.js'
import { FileListItem } from './FileInput/FileListItem.js'
import { Placeholder } from './FileInput/Placeholder.js'

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
            label,
            buttonLabel,
            error,
            valid,
            warning,
            required,
            accept,
            multiple,
            children,
            small,
            large,
            disabled,
        } = this.props

        return (
            <div className={cx('container', className)}>
                {label && <p className={cx('label', { required })}>{label}</p>}

                <input
                    type="file"
                    ref={this.ref}
                    onChange={this.onChange}
                    accept={accept}
                    multiple={multiple}
                    disabled={disabled}
                />

                <div className="button-container">
                    <Button
                        onClick={this.onClick}
                        type="button"
                        icon={<Upload />}
                        small={small}
                        large={large}
                        disabled={disabled}
                    >
                        {buttonLabel}
                    </Button>
                    <StatusIconNoDefault
                        error={error}
                        valid={valid}
                        warning={warning}
                    />
                </div>

                <div>{children}</div>

                <style jsx>{`
                    input {
                        display: none;
                    }

                    .label {
                        font-size: 14px;
                        margin: 0;
                        padding-bottom: ${spacers.dp8};
                        color: ${colors.grey900};
                    }

                    .label.required::after {
                        padding-left: ${spacers.dp4};
                        content: '*';
                    }

                    .button-container {
                        display: flex;
                        align-items: center;
                        padding-bottom: ${spacers.dp4};
                    }

                    .button-container > :global(svg) {
                        width: 18px;
                        height: 18px;
                        margin-left: ${spacers.dp8};
                    }
                `}</style>
            </div>
        )
    }
}

const childPropType = propTypes.oneOfType([
    instanceOfComponent(FileList),
    instanceOfComponent(Help),
])

FileInput.propTypes = {
    className: propTypes.string,
    onChange: propTypes.func.isRequired,

    label: propTypes.string,
    buttonLabel: propTypes.string,

    children: propTypes.oneOfType([
        childPropType,
        propTypes.arrayOf(childPropType),
    ]),

    error: statusPropType,
    valid: statusPropType,
    warning: statusPropType,

    small: sizePropType,
    large: sizePropType,

    required: propTypes.bool,
    disabled: propTypes.bool,

    accept: propTypes.string,
    multiple: propTypes.bool,
}

FileInput.defaultProps = {
    accept: '*',
}

FileInput.FileList = FileList
FileInput.FileListItem = FileListItem
FileInput.Placeholder = Placeholder

export { FileInput }
