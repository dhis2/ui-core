import propTypes from '@dhis2/prop-types'
import React, { PureComponent } from 'react'
import css from 'styled-jsx/css'
import cx from 'classnames'

import { statusPropType } from './common-prop-types.js'
import { theme, colors } from './theme.js'
import { StatusIconNoDefault } from './icons/Status.js'
import { detectScrollbarSize } from './Tabs/detectScrollbarSize.js'

const styles = css`
    .container {
        display: flex;
    }
    .textarea {
        /* Never smaller than icon + border x 2  */
        min-width: 28px;
        min-height: 28px;

        box-sizing: border-box;
        padding: 8px 12px;

        color: ${colors.grey900};
        background-color: transparent;

        border: 1px solid ${colors.grey500};
        border-radius: 3px;
        box-shadow: inset 0 0 0 1px rgba(102, 113, 123, 0.15),
            inset 0 1px 2px 0 rgba(102, 113, 123, 0.1);
        outline: 0;

        font-size: 14px;
        line-height: 16px;
        user-select: text;
    }

    .textarea.dense {
        padding: 4px 12px;
    }

    .textarea.focus {
        border-color: ${colors.teal400};
    }

    .textarea.valid {
        border-color: ${theme.valid};
    }

    .textarea.warning {
        border-color: ${theme.warning};
    }

    .textarea.error {
        border-color: ${theme.error};
    }

    .textarea.disabled {
        cursor: not-allowed;
        border-color: ${theme.disabled};
        color: ${theme.disabled};
        background-color: ${colors.grey100};
    }

    .textarea.read-only {
        background-color: ${colors.grey100};
        cursor: text;
    }

    .status-icon {
        flex-grow: 0;
        width: 0;
        position: relative;
    }
    .status-icon :global(svg) {
        position: absolute;
        top: 2px;
        z-index: 1;
        margin-right: 0;
    }
`

export class TextArea extends PureComponent {
    textareaRef = React.createRef()

    state = {
        focus: this.props.initialFocus,
        hasScrollbar: false,
        height: 'auto',
    }
    scrollbarSize = detectScrollbarSize()
    textareaDimensions = {
        width: 0,
        height: 0,
    }
    userHasResized = false

    onFocus = e => {
        this.setState({ focus: true })
        this.props.onFocus(e)
    }

    onBlur = e => {
        this.setState({ focus: false })
        this.props.onBlur(e)
    }

    setTextareaDimensions = () => {
        const textarea = this.textareaRef.current
        this.textareaDimensions = {
            width: textarea.clientWidth,
            height: textarea.clientHeight,
        }
    }

    hasUserResized = () => {
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

    componentDidMount() {
        if (this.props.initialFocus) {
            this.textareaRef.current.focus()
        }
        this.attachResizeListener()
        this.setHasScrollBar()
    }

    componentDidUpdate(prevProps) {
        this.setHasScrollBar()

        if (this.shouldDoAutoHeight() && prevProps.value !== this.props.value) {
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

    shouldDoAutoHeight() {
        return this.props.autoHeight && !this.userHasResized
    }

    setHeight() {
        const textarea = this.textareaRef.current
        const offset = textarea.offsetHeight - textarea.clientHeight
        const height = textarea.scrollHeight + offset + 'px'
        this.setState({ height })
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

        const { focus, height } = this.state

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
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}
                    onChange={onChange}
                    rows={rows}
                    className={cx('textarea', className, {
                        dense,
                        disabled,
                        error,
                        valid,
                        warning,
                        focus,
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
                        height: ${height};
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
    autoHeight: propTypes.bool,
}
