import React from 'react'
import { Layer } from '../LayerContext.js'
import { layers } from '../theme.js'

export default { title: 'Layer (computed zIndex)', component: Layer }

const ApplicationTopLayer = <Layer level={layers.applicationTop} />
