import React from 'react'
import propTypes from 'prop-types'
import { Button } from '../Button.js'

const InputClearButton = ({ handleClear, className }) => (
    <Button
        small
        secondary
        onClick={handleClear}
        type="button"
        className={className}
    >
        Clear
    </Button>
)

InputClearButton.propTypes = {
    className: propTypes.string,
    handleClear: propTypes.func.isRequired,
}

export { InputClearButton }
