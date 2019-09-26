import propTypes from '@dhis2/prop-types'
import React, { PureComponent } from 'react'
import cx from 'classnames'

import { statusPropType } from './common-prop-types.js'
import { StatusIconNoDefault } from './icons/Status.js'
import { detectScrollbarSize } from './Tabs/detectScrollbarSize.js'

import { styles } from './TextArea/styles.js'

export class TextArea extends PureComponent {
    constructor(props) {
        super(props)

        this.textareaRef = React.createRef()

        this.state = {
            hasScrollbar: false,
            height: 'auto',
        }

        this.scrollbarSize = detectScrollbarSize()
        this.textareaDimensions = { width: 0, height: 0 }
        this.userHasResized = false

        this.setTextareaDimensions = this.setTextareaDimensions.bind(this)
        this.hasUserResized = this.hasUserResized.bind(this)
    }

    componentDidMount() {
        this.attachResizeListener()
        this.setHasScrollBar()

        if (this.props.initialFocus) {
            this.textareaRef.current.focus()
        }

        if (this.shouldDoAutoGrow()) {
            this.setHeight()
        }
    }

    componentDidUpdate() {
        this.setHasScrollBar()

        if (this.shouldDoAutoGrow()) {
            this.setHeight()
        }
    }

    attachResizeListener() {
        const textarea = this.textareaRef.current
        textarea.addEventListener('mousedown', this.setTextareaDimensions)
        textarea.addEventListener('mouseup', this.hasUserResized)
    }

    removeResizeListener() {
        const textarea = this.textareaRef.current
        textarea.removeEventListener('mousedown', this.setTextareaDimensions)
        textarea.removeEventListener('mouseup', this.hasUserResized)
    }

    setHasScrollBar() {
        const textarea = this.textareaRef.current
        const hasScrollbar = textarea.scrollHeight > textarea.clientHeight
        this.setState({ hasScrollbar })
    }

    setHeight() {
        const textarea = this.textareaRef.current
        const offset = textarea.offsetHeight - textarea.clientHeight
        const height = textarea.scrollHeight + offset + 'px'
        this.setState({ height })
    }

    setTextareaDimensions() {
        const textarea = this.textareaRef.current
        this.textareaDimensions = {
            width: textarea.clientWidth,
            height: textarea.clientHeight,
        }
    }

    shouldDoAutoGrow() {
        return this.props.autoGrow && !this.userHasResized
    }

    hasUserResized() {
        const { width: oldWidth, height: oldHeight } = this.textareaDimensions

        this.setTextareaDimensions()

        const { width: newWidth, height: newHeight } = this.textareaDimensions
        const userHasResized = newWidth !== oldWidth || newHeight !== oldHeight

        if (userHasResized) {
            this.userHasResized = true
            this.removeResizeListener()
            this.setHasScrollBar()
        }
    }

    getIconRightPosition() {
        const base = 2
        const right = this.state.hasScrollbar ? base + this.scrollbarSize : base
        return `${right}px`
    }

    render() {
        const {
            className,
            onChange,
            onFocus,
            onBlur,
            dense,
            disabled,
            readOnly,
            placeholder,
            name,
            valid,
            error,
            warning,
            loading,
            value,
            tabIndex,
            rows,
            width,
            resize,
        } = this.props

        return (
            <div className={cx('container', className)}>
                <textarea
                    id={name}
                    name={name}
                    placeholder={placeholder}
                    ref={this.textareaRef}
                    value={value}
                    disabled={disabled || readOnly}
                    tabIndex={tabIndex}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onChange={onChange}
                    rows={rows}
                    className={cx('textarea', className, {
                        dense,
                        disabled,
                        error,
                        valid,
                        warning,
                        'read-only': readOnly,
                    })}
                />

                <div className="status-icon">
                    <StatusIconNoDefault
                        error={error}
                        valid={valid}
                        loading={loading}
                        warning={warning}
                    />
                </div>

                <style jsx>{styles}</style>
                <style jsx>{`
                    .textarea {
                        width: ${width};
                        height: ${this.state.height};
                        resize: ${resize};
                    }
                    .status-icon :global(svg) {
                        right: ${this.getIconRightPosition()};
                    }
                `}</style>
            </div>
        )
    }
}

TextArea.defaultProps = {
    rows: 4,
    width: '100%',
    resize: 'vertical',
    onBlur: () => {},
    onFocus: () => {},
}

TextArea.propTypes = {
    name: propTypes.string.isRequired,

    className: propTypes.string,

    onChange: propTypes.func.isRequired,
    onFocus: propTypes.func,
    onBlur: propTypes.func,

    value: propTypes.string,
    placeholder: propTypes.string,
    tabIndex: propTypes.string,

    disabled: propTypes.bool,
    readOnly: propTypes.bool,
    dense: propTypes.bool,

    valid: statusPropType,
    warning: statusPropType,
    error: statusPropType,
    loading: propTypes.bool,

    initialFocus: propTypes.bool,

    rows: propTypes.number,
    width: propTypes.oneOfType([propTypes.string, propTypes.number]),
    resize: propTypes.oneOf(['none', 'both', 'horizontal', 'vertical']),
    autoGrow: propTypes.bool,
}
