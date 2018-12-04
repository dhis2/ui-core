import React from 'react'
import PropTypes from 'prop-types'
import s from './styles'

function Help({ text, status }) {
    return (
        <div
            className={s('reset', 'base', {
                [`status-${status}`]: true,
            })}
        >
            {text}
        </div>
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
