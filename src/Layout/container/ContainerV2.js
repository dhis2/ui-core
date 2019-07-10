import propTypes from 'prop-types'
import React from 'react'
import css from 'styled-jsx/css'
import cx from 'classnames'

import { LayoutContent } from '../LayoutContent'
import { LayoutTopBar } from '../LayoutTopBar'
import { containerStyles, containerV2Styles } from './styles'
import { instanceOfComponent } from '../../prop-validators/instanceOfComponent'

/**
 * Layout Version 2
 * ================
 *
 * |---------|
 * | TopBar  |
 * |---------|
 * | Content |
 * |---------|
 */
const ContainerV2 = ({ children }) => (
    <div className={cx('container', 'container-v2')}>
        {children}
        <style jsx>{containerStyles}</style>
        <style jsx>{containerV2Styles}</style>
    </div>
)

const containerV2s = propTypes.oneOfType([
    instanceOfComponent(LayoutTopBar),
    instanceOfComponent(LayoutContent),
])

ContainerV2.propTypes = {
    children: propTypes.arrayOf(containerV2s),
}

export { ContainerV2 }
