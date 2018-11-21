import React from 'react'
import PropTypes from 'prop-types'
import s from './styles'

export function Divider({ margin }) {
    const style = { margin }
    return <div style={style} className={s('base')} />
}

Divider.defaultProps = {
    margin: '8px 0',
}

Divider.propTypes = {
    margin: PropTypes.string,
}

export default Divider
