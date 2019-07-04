import React from 'react'
import css from 'styled-jsx/css'
import propTypes from 'prop-types'
import cx from 'classnames'

import { LayoutAreaContent } from '../LayoutAreaContent'
import { LayoutAreaNavigation } from '../LayoutAreaNavigation'
import { LayoutAreaSidebar } from '../LayoutAreaSidebar'
import { containerStyles, containerV4Styles } from './styles'
import { instanceOfComponent } from '../../prop-validators/instanceOfComponent'

/**
 *   Layout Version 4
 * =====================
 *
 * |-------------------|
 * |     Navigaton     |
 * |-------------------|
 * | Sidebar | Content |
 * |-------------------|
 */
const ContainerV4 = ({ children }) => (
    <div className={cx('container', 'container-v4')}>
        {children}
        <style jsx>{containerStyles}</style>
        <style jsx>{containerV4Styles}</style>
    </div>
)

const containerV4Areas = propTypes.oneOfType([
    instanceOfComponent(LayoutAreaNavigation),
    instanceOfComponent(LayoutAreaSidebar),
    instanceOfComponent(LayoutAreaContent),
])

ContainerV4.propTypes = {
    children: propTypes.arrayOf(containerV4Areas),
}

export { ContainerV4 }
