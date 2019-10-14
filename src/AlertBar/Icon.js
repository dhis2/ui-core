import propTypes from '@dhis2/prop-types'
import React from 'react'

import { Error, Info, Valid, Warning } from '../icons/Status.js'
import { spacers } from '../theme.js'

const Icon = ({ icon, status }) => {
    if (icon === false) {
        return null
    }

    let IconComponent
    if (React.isValidElement(icon)) {
        IconComponent = icon
    } else if (status === 'error') {
        IconComponent = <Error />
    } else if (status === 'warning') {
        IconComponent = <Warning />
    } else if (status === 'valid') {
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
    status: propTypes.oneOfType(['valid', 'warning', 'error', 'info']),
}

export { Icon, iconPropType }
