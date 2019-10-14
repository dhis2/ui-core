import propTypes from '@dhis2/prop-types'
import React from 'react'

import { StatusIcon } from '../icons/Status.js'
import { spacers } from '../theme.js'

const Icon = ({ icon, success, warning, critical, info }) => {
    if (icon === false) {
        return null
    }

    return (
        <div>
            {React.isValidElement(icon) ? (
                icon
            ) : (
                <StatusIcon
                    valid={success}
                    error={critical}
                    warning={warning}
                    info={info}
                />
            )}
            <style jsx>{`
                div {
                    margin-right: ${spacers.dp16};
                }
                div :global(svg) {
                    width: 24px;
                    height: 24px;
                }
            `}</style>
        </div>
    )
}

const iconPropType = propTypes.oneOfType([propTypes.bool, propTypes.element])
const alertStatePropType = propTypes.mutuallyExclusive(
    ['success', 'warning', 'critical', 'info'],
    propTypes.bool
)

Icon.propTypes = {
    icon: iconPropType,
    success: alertStatePropType,
    warning: alertStatePropType,
    info: alertStatePropType,
    critical: alertStatePropType,
}

export { Icon, iconPropType }
