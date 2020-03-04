import React from 'react'
import propTypes from '@dhis2/prop-types'

import { Button } from './Button'
import { IconAddAll } from './icons'

export const AddAll = ({ label, dataTest, disabled, onClick }) => (
    <Button
        label={label}
        dataTest={`${dataTest}-addall`}
        disabled={disabled}
        onClick={onClick}
    >
        <IconAddAll dataTest={dataTest} />
    </Button>
)

AddAll.propTypes = {
    dataTest: propTypes.string.isRequired,
    onClick: propTypes.func.isRequired,
    disabled: propTypes.bool,
    label: propTypes.string,
}
