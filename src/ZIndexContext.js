import React from 'react'
import propTypes from '@dhis2/prop-types'

const ZIndexContext = React.createContext(0)
const ZIndexProvider = ZIndexContext.Provider

const ZIndexConsumer = ({ propZIndex = 0, defaultZIndex = 0, children }) => (
    <ZIndexContext.Consumer>
        {(contextZIndex = 0) =>
            children(propZIndex || contextZIndex + defaultZIndex)
        }
    </ZIndexContext.Consumer>
)

ZIndexConsumer.propTypes = {
    children: propTypes.func.isRequired,
    propZIndex: propTypes.number,
    defaultZIndex: propTypes.number.isRequired,
}

export { ZIndexProvider, ZIndexConsumer }
