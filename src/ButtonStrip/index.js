import React from 'react'
import propTypes from 'prop-types'
import cx from 'classnames'
import { instanceOfComponent } from '../prop-validators'
import { Button } from '../Button'
import styles from './styles'

const ButtonStrip = ({ className, children, compact, start, middle, end }) => (
    <div className={cx(className, { compact, start, middle, end })}>
        {children}

        <style jsx>{styles}</style>
    </div>
)

ButtonStrip.propTypes = {
    className: propTypes.string,
    children: propTypes.arrayOf(instanceOfComponent(Button)),
    compact: propTypes.bool,
    start: propTypes.bool,
    middle: propTypes.bool,
    end: propTypes.bool,
}

export { ButtonStrip }
