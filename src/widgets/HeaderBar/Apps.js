/** @format */

import React from 'react'
import Icon from '../../core/Icon'

import { bem } from './HeaderBar'

export default function Apps() {
    return (
        <div className={bem.e('apps-container')}>
            <Icon name="apps" />
        </div>
    )
}
