import React from 'react'
import PropTypes from 'prop-types'
import s from './styles'
import { t } from '../../utils'

function Icon({ name, className, onClick }) {
    return (
        <i onClick={onClick} className={s('container', t(className))}>
            {name}
        </i>
    )
}

Icon.defaultProps = {
    name: '',
    className: '',
    onClick: undefined,
}

Icon.propTypes = {
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func,
}

export { Icon }
export default Icon
