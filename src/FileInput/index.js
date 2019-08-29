import React, { createRef, PureComponent } from 'react'
import propTypes from 'prop-types'
import cx from 'classnames'
import { instanceOfComponent } from '@dhis2/prop-types'

import { Button } from '../Button'
import { Help } from '../Help'
import { spacers, colors } from '../theme'
import { Upload } from '../icons/Upload'
import { StatusIconNoDefault } from '../icons/Status'
import { SelectedFile } from './SelectedFile'
import { Placeholder } from './Placeholder'

class FileInput extends PureComponent {
    ref = createRef()

    onClick = () => {
        this.ref.current.click()
    }

    onChange = () => {
        this.props.onChange(this.ref.current.files)
    }

    render() {
        const {
            label,
            buttonLabel,
            error,
            valid,
            warning,
            required,
            accept,
            multiple,
            children,
        } = this.props

        return (
            <div>
                {label && <p className={cx('label', { required })}>{label}</p>}

                <input
                    type="file"
                    ref={this.ref}
                    onChange={this.onChange}
                    accept={accept}
                    multiple={multiple}
                />

                <div className="button-container">
                    <Button
                        onClick={this.onClick}
                        type="button"
                        icon={<Upload />}
                    >
                        {buttonLabel}
                    </Button>
                    <StatusIconNoDefault
                        error={error}
                        valid={valid}
                        warning={warning}
                    />
                </div>

                {children}

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
    instanceOfComponent(SelectedFile),
    instanceOfComponent(Help),
])

FileInput.propTypes = {
    onChange: propTypes.func.isRequired,

    label: propTypes.string,
    buttonLabel: propTypes.string,

    children: propTypes.oneOfType([
        childPropType,
        propTypes.arrayOf(childPropType),
    ]),

    error: propTypes.bool,
    valid: propTypes.bool,
    warning: propTypes.bool,

    required: propTypes.bool,

    accept: propTypes.string,
    multiple: propTypes.bool,
}

FileInput.defaultProps = {
    accept: '*',
}

FileInput.SelectedFile = SelectedFile
FileInput.Placeholder = Placeholder

export { FileInput }
