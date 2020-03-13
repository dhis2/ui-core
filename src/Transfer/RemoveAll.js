import React from 'react'
import propTypes from '@dhis2/prop-types'

import { Button } from './Button'
import { IconRemoveAll } from './icons'

export const RemoveAll = ({ label, dataTest, disabled, onClick }) => (
    <Button
        label={label}
        dataTest={`${dataTest}-removeall`}
        disabled={disabled}
        onClick={onClick}
    >
        <IconRemoveAll disabled={disabled} dataTest={dataTest} />
    </Button>
)

RemoveAll.propTypes = {
    dataTest: propTypes.string.isRequired,
    onClick: propTypes.func.isRequired,
    disabled: propTypes.bool,
    label: propTypes.string,
}
