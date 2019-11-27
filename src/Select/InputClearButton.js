import React from 'react'
import propTypes from '@dhis2/prop-types'
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
    clearText: propTypes.string.isRequired,
    onClear: propTypes.func.isRequired,
    className: propTypes.string,
}

export { InputClearButton }
