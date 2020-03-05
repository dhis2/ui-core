import React from 'react'
import { CircularLoader } from './CircularLoader.js'

export default {
    title: 'Atom/CircularLoader',
    component: CircularLoader,
}

export const Default = () => <CircularLoader />
export const Small = () => <CircularLoader small />
export const Large = () => <CircularLoader large />
