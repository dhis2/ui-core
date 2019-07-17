import React from 'react'
import { Valid, Warning, Error, Info } from '../icons/Status'
import { iconPropType, variantProptype } from './index'
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

Icon.propTypes = {
    icon: iconPropType,
    success: variantProptype,
    warning: variantProptype,
    critical: variantProptype,
}

export { Icon }
