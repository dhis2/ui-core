import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import styles from './styles'

import 'material-design-icons-iconfont/dist/material-design-icons.css'

function Icon({ name, className, onClick }) {
    return (
        <i onClick={onClick} className={cx('base', className)}>
            {name}

            <style jsx>{styles}</style>
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
