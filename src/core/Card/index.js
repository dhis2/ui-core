import React from 'react'
import PropTypes from 'prop-types'
import s from './styles'

function Card({ className, children }) {
    return <div className={s('base', className)}>{children}</div>
}

Card.defaultProps = {
    className: '',
}

Card.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
}

export { Card }
export default Card
