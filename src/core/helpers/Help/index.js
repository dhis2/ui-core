import React from 'react'
import PropTypes from 'prop-types'
import { rx } from './styles'

function Help({ text, status }) {
    return (
        <p
            className={rx('base', {
                [`status-${status}`]: true,
            })}
        >
            {text}
        </p>
    )
}

Help.defaultProps = {
    status: 'default',
}

Help.propTypes = {
    text: PropTypes.string.isRequired,
    status: PropTypes.oneOf(['default', 'valid', 'warning', 'error']),
}

export { Help }
export default Help
