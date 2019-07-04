import propTypes from 'prop-types'
import React from 'react'
import css from 'styled-jsx/css'
import cx from 'classnames'

import { LayoutAreaContent } from '../LayoutAreaContent'
import { LayoutAreaNavigation } from '../LayoutAreaNavigation'
import { containerStyles, containerV2Styles } from './styles'
import { instanceOfComponent } from '../../prop-validators/instanceOfComponent'

/**
 * Layout Version 2
 * ================
 *
 * |-----------|
 * | Navigaton |
 * |-----------|
 * |  Content  |
 * |-----------|
 */
const ContainerV2 = ({ children }) => (
    <div className={cx('container', 'container-v2')}>
        {children}
        <style jsx>{containerStyles}</style>
        <style jsx>{containerV2Styles}</style>
    </div>
)

const containerV2Areas = propTypes.oneOfType([
    instanceOfComponent(LayoutAreaNavigation),
    instanceOfComponent(LayoutAreaContent),
])

ContainerV2.propTypes = {
    children: propTypes.arrayOf(containerV2Areas),
}

export { ContainerV2 }
