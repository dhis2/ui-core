import React from 'react'
import propTypes from '@dhis2/prop-types'

import { Input } from '../Input.js'
import { spacers } from '../theme.js'

export const Filter = ({ dataTest, filter, onChange }) => {
    const dataTestId = `${dataTest}-filter`

    return (
        <div data-test={dataTestId}>
            <Input name={dataTestId} value={filter} onChange={onChange} />

            <style jsx>{`
                div {
                    padding-bottom: ${spacers.dp8};
                }

                div:first-child {
                    padding-top: ${spacers.dp8};
                }
            `}</style>
        </div>
    )
}

Filter.propTypes = {
    dataTest: propTypes.string.isRequired,
    filter: propTypes.string.isRequired,
    onChange: propTypes.func.isRequired,
}
