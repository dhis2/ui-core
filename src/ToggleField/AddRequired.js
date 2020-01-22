import propTypes from '@dhis2/prop-types'
import React from 'react'
import { Required } from '../Label/Required.js'

export const AddRequired = ({ label, required, dataTest }) => (
    <React.Fragment>
        {label}
        {required && <Required dataTest={`${dataTest}-required`} />}
    </React.Fragment>
)

AddRequired.propTypes = {
    label: propTypes.node.isRequired,
    dataTest: propTypes.string,
    required: propTypes.bool,
}
