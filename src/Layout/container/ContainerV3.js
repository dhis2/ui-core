import propTypes from 'prop-types'
import React from 'react'
import css from 'styled-jsx/css'
import cx from 'classnames'

import { LayoutAreaContent } from '../LayoutAreaContent'
import { LayoutAreaSidebar } from '../LayoutAreaSidebar'
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

const containerV3Areas = propTypes.oneOfType([
    instanceOfComponent(LayoutAreaSidebar),
    instanceOfComponent(LayoutAreaContent),
])

ContainerV3.propTypes = {
    children: propTypes.arrayOf(containerV3Areas),
}

export { ContainerV3 }
