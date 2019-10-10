import propTypes from '@dhis2/prop-types'
import React from 'react'
import cx from 'classnames'
import { StatusIconNoDefault } from '../icons/Status.js'
import { spacers } from '../theme.js'
import { iconStyles } from './styles.js'

const Icon = ({ icon, success, warning, critical, info }) => {
    if (icon === false) {
        return null
    }

    const colorClassName = warning ? 'yellow' : 'white'

    return (
        <div>
            {React.isValidElement(icon) ? (
                icon
            ) : (
                <StatusIconNoDefault
                    valid={success}
                    error={critical}
                    warning={warning}
                    info={info}
                    className={cx(iconStyles.className, colorClassName)}
                />
            )}
            {iconStyles.styles}
            <style jsx>{`
                div {
                    margin-right: ${spacers.dp16};
                }
            `}</style>
        </div>
    )
}

const iconPropType = propTypes.oneOfType([propTypes.bool, propTypes.element])
const alertIconStatePropType = propTypes.mutuallyExclusive(
    ['success', 'warning', 'critical', 'info'],
    propTypes.bool
)

Icon.propTypes = {
    icon: iconPropType,
    success: alertIconStatePropType,
    warning: alertIconStatePropType,
    critical: alertIconStatePropType,
    info: alertIconStatePropType,
}

export { Icon, iconPropType }
