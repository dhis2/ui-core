import React from 'react'
import propTypes from '@dhis2/prop-types'

import { Button } from './Button'
import { IconAddIndividual } from './icons'

export const AddIndividual = ({ label, dataTest, disabled, onClick }) => (
    <Button
        label={label}
        dataTest={`${dataTest}-addindividual`}
        disabled={disabled}
        onClick={onClick}
    >
        <IconAddIndividual disabled={disabled} dataTest={dataTest} />
    </Button>
)

AddIndividual.propTypes = {
    dataTest: propTypes.string.isRequired,
    onClick: propTypes.func.isRequired,
    disabled: propTypes.bool,
    label: propTypes.string,
}
