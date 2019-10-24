import React from 'react'
import propTypes from 'prop-types'
import { Button } from '../Button.js'

const InputClearButton = ({ handleClear, clearText, className }) => (
    <Button
        small
        secondary
        onClick={handleClear}
        type="button"
        className={className}
    >
        {clearText}
    </Button>
)

InputClearButton.propTypes = {
    className: propTypes.string,
    handleClear: propTypes.func.isRequired,
    clearText: propTypes.string.isRequired,
}

export { InputClearButton }
