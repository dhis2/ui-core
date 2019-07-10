import propTypes from 'prop-types'
import React from 'react'
import css from 'styled-jsx/css'
import cx from 'classnames'

import { LayoutContent } from '../LayoutContent'
import { LayoutSidebar } from '../LayoutSidebar'
import { containerStyles, containerV3Styles } from './styles'
import { instanceOfComponent } from '../../prop-validators/instanceOfComponent'

/**
 *   Layout Version 3
 * =====================
 *
 * |-------------------|
 * | Sidebar | Content |
 * |-------------------|
 */
const ContainerV3 = ({ children }) => (
    <div className={cx('container', 'container-v3')}>
        {children}
        <style jsx>{containerStyles}</style>
        <style jsx>{containerV3Styles}</style>
    </div>
)

const containerV3s = propTypes.oneOfType([
    instanceOfComponent(LayoutSidebar),
    instanceOfComponent(LayoutContent),
])

ContainerV3.propTypes = {
    children: propTypes.arrayOf(containerV3s),
}

export { ContainerV3 }
