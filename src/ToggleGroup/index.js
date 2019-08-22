import React from 'react'
import propTypes from 'prop-types'
import cx from 'classnames'
import { instanceOfComponent } from '@dhis2/prop-types'
import { Radio } from '../Radio'
import { Switch } from '../Switch'
import { Checkbox } from '../Checkbox'
import { spacers } from '../theme'
import { Label } from './Label'

const ToggleGroup = ({ className, children, stacked }) => (
    <div className={cx(className, { stacked })}>
        {children}
        <style jsx>{`
            div {
                display: flex;
                flex-direction: row;
            }

            .stacked {
                flex-direction: column;
            }

            div > :global(label) {
                margin-right: ${spacers.dp12};
            }

            .stacked > :global(label) {
                margin-bottom: ${spacers.dp8};
            }
        `}</style>
    </div>
)

ToggleGroup.Label = Label

ToggleGroup.propTypes = {
    className: propTypes.string,
    children: propTypes.oneOfType([
        propTypes.arrayOf(instanceOfComponent(Radio)),
        propTypes.arrayOf(instanceOfComponent(Checkbox)),
        propTypes.arrayOf(instanceOfComponent(Switch)),
    ]),
    stacked: propTypes.bool,
}

export { ToggleGroup }
