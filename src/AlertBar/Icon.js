import propTypes from '@dhis2/prop-types'
import React from 'react'
import { resolve } from 'styled-jsx/css'

import { statusPropType } from '../common-prop-types.js'
import { colors, spacers } from '../theme.js'

import { StatusIconNoDefault } from '../icons/Status.js'

const whiteIcon = resolve`svg { fill: ${colors.white}; }`
const yellowIcon = resolve`svg { fill: ${colors.yellow900}; }`

const Icon = ({ icon, success, warning, critical, info }) => {
    if (icon === false) {
        return null
    }

    const { className, styles } = warning ? yellowIcon : whiteIcon

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
                    className={className}
                />
            )}
            {styles}
            <style jsx>{`
                div {
                    margin-right: ${spacers.dp16};
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
    info: statusPropType,
}

export { Icon, iconPropType }
