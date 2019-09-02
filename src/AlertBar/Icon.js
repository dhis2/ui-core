import propTypes from 'prop-types'
import React from 'react'

import { statusPropType } from '../common-prop-types.js'

import { Error, Info, Valid, Warning } from '../icons/Status.js'
import { spacers } from '../theme.js'

const Icon = ({ icon, success, warning, critical }) => {
    if (icon === false) {
        return null
    }

    let IconComponent
    if (React.isValidElement(icon)) {
        IconComponent = icon
    } else if (critical) {
        IconComponent = <Error />
    } else if (warning) {
        IconComponent = <Warning />
    } else if (success) {
        IconComponent = <Valid />
    } else {
        IconComponent = <Info />
    }

    return (
        <div>
            {IconComponent}
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

Icon.propTypes = {
    icon: iconPropType,
    success: statusPropType,
    warning: statusPropType,
    critical: statusPropType,
}

export { Icon, iconPropType }
