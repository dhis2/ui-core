import React, { createRef, PureComponent } from 'react'
import propTypes from 'prop-types'
import cx from 'classnames'

import { Button } from '../Button'
import { theme, spacers } from '../theme'
import { Upload } from '../icons/Upload'

class FileField extends PureComponent {
    ref = createRef()

    onClick = () => {
        this.ref.current.click()
    }

    onChange = () => {
        this.props.onChange(this.ref.current.files[0])
    }

    render() {
        const { error, label, required, valid, value, warning } = this.props
        const displayLabel = value ? value.name : label

        return (
            <div
                className={cx({
                    error,
                    valid: valid,
                    warning: warning,
                    required: required && !value,
                })}
            >
                <input type="file" ref={this.ref} onChange={this.onChange} />

                <Button onClick={this.onClick} type="button" icon={<Upload />}>
                    <span className="label">{displayLabel}</span>
                </Button>

                <style jsx>{`
                    input {
                        display: none;
                    }

                    .valid .label {
                        color: ${theme.valid};
                    }

                    .error .label {
                        color: ${theme.error};
                    }

                    .warning .label {
                        color: ${theme.warning};
                    }

                    .required .label::after {
                        padding-left: ${spacers.dp4};
                        content: '*';
                    }

                    .valid {
                        fill: ${theme.valid};
                    }

                    .error {
                        fill: ${theme.error};
                    }

                    .warning {
                        fill: ${theme.warning};
                    }
                `}</style>
            </div>
        )
    }
}

FileField.propTypes = {
    error: propTypes.bool,
    label: propTypes.string.isRequired,
    onChange: propTypes.func.isRequired,
    required: propTypes.bool,
    valid: propTypes.bool,
    value: propTypes.any,
    warning: propTypes.bool,
}

export { FileField }
