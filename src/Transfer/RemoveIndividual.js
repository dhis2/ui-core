import React from 'react'
import propTypes from '@dhis2/prop-types'

import { Button } from './Button'
import { IconRemoveIndividual } from './icons'

export const RemoveIndividual = ({ label, dataTest, disabled, onClick }) => (
    <Button
        label={label}
        dataTest={`${dataTest}-removeindividual`}
        disabled={disabled}
        onClick={onClick}
    >
        <IconRemoveIndividual disabled={disabled} dataTest={dataTest} />
    </Button>
)

RemoveIndividual.propTypes = {
    dataTest: propTypes.string.isRequired,
    onClick: propTypes.func.isRequired,
    disabled: propTypes.bool,
    label: propTypes.string,
}
