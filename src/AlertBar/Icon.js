import React, { isValidElement } from 'react'
import propTypes from 'prop-types'
import { Valid, Warning, Error, Info } from '../icons/Status'
import { spacers } from '../theme.js'

const Icon = ({ icon, success, warning, critical }) => {
    if (icon === false) {
        return null
    }

    let IconComponent
    if (isValidElement(icon)) {
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
    success: propTypes.bool,
    warning: propTypes.bool,
    critical: propTypes.bool,
}

export { Icon, iconPropType }
