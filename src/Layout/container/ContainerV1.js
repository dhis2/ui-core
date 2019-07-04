import propTypes from 'prop-types'
import React from 'react'
import css from 'styled-jsx/css'
import cx from 'classnames'

import { LayoutAreaContent } from '../LayoutAreaContent'
import { containerStyles, containerV1Styles } from './styles'
import { instanceOfComponent } from '../../prop-validators/instanceOfComponent'

/**
 * Layout Version 1
 * ================
 *
 * |---------|
 * | Content |
 * |---------|
 */
const ContainerV1 = ({ children }) => (
    <div className={cx('container', 'container-v1')}>
        {children}
        <style jsx>{containerStyles}</style>
        <style jsx>{containerV1Styles}</style>
    </div>
)

ContainerV1.propTypes = {
    children: instanceOfComponent(LayoutAreaContent),
}

export { ContainerV1 }
