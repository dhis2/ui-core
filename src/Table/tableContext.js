import React, { createContext } from 'react'

export const TableContext = createContext({ responsiveLayout: false })
export const { Provider, Consumer } = TableContext
