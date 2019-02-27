import React from 'react'
import { Divider as CoreDivider } from 'core/Divider'

export const Title = ({ children }) => <h1 className="title">{children}</h1>
export const Heading = ({ children }) => <h2 className="heading">{children}</h2>
export const Text = ({ style, children }) => (
    <div style={style} className="text">
        {children}
    </div>
)
export const Row = ({ style, children }) => (
    <div style={style} className="row">
        {children}
    </div>
)
export const Col = ({ style, children }) => (
    <div style={style} className="col">
        {children}
    </div>
)
export const Divider = () => <CoreDivider margin="43px 0 60px 0" />
export const Spacer = ({ height }) => <div style={{ height, width: '100%' }} />
