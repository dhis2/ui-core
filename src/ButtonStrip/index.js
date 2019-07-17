import React from 'react'
import propTypes from 'prop-types'
import cx from 'classnames'
import { instanceOfComponent, mutuallyExclusive } from '@dhis2/prop-types'
import { Button } from '../Button'
import styles from './styles'

const ButtonStrip = ({ className, children, compact, start, middle, end }) => (
    <div className={cx(className, { compact, start, middle, end })}>
        {children}

        <style jsx>{styles}</style>
    </div>
)

const alignmentPropType = mutuallyExclusive(
    ['start', 'middle', 'end'],
    propTypes.bool
)

ButtonStrip.propTypes = {
    className: propTypes.string,
    children: propTypes.arrayOf(instanceOfComponent(Button)),
    compact: propTypes.bool,
    start: alignmentPropType,
    middle: alignmentPropType,
    end: alignmentPropType,
}

export { ButtonStrip }
