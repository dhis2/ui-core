import React from 'react'
import propTypes from 'prop-types'
import { Button } from '../Button.js'

const InputClearButton = ({ onClear, clearText, className }) => (
    <Button
        small
        secondary
        onClick={onClear}
        type="button"
        className={className}
    >
        {clearText}
    </Button>
)

InputClearButton.propTypes = {
    className: propTypes.string,
    onClear: propTypes.func.isRequired,
    clearText: propTypes.string.isRequired,
}

export { InputClearButton }
