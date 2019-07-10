import React from 'react'
import css from 'styled-jsx/css'
import propTypes from 'prop-types'
import cx from 'classnames'

import { LayoutContent } from '../LayoutContent'
import { LayoutTopBar } from '../LayoutTopBar'
import { LayoutSidebar } from '../LayoutSidebar'
import { containerStyles, containerV4Styles } from './styles'
import { instanceOfComponent } from '../../prop-validators/instanceOfComponent'

/**
 *   Layout Version 4
 * =====================
 *
 * |-------------------|
 * |      TopBar       |
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

const containerV4s = propTypes.oneOfType([
    instanceOfComponent(LayoutTopBar),
    instanceOfComponent(LayoutSidebar),
    instanceOfComponent(LayoutContent),
])

ContainerV4.propTypes = {
    children: propTypes.arrayOf(containerV4s),
}

export { ContainerV4 }
