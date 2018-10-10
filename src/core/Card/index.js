import React from 'react'
import PropTypes from 'prop-types'
import s from './styles'

function Card({ width, height, children }) {
    const style = { width, height }
    return (
        <div style={style} className={s('container')}>
            {children}
        </div>
    )
}

Card.defaultProps = {
    width: 'inherit',
    height: 'inherit',
}

Card.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    children: PropTypes.node,
}

export { Card }
export default Card
