import React, { createContext } from 'react'

export const TableContext = createContext({ staticLayout: false })
export const { Provider, Consumer } = TableContext
