import React, { createContext, useContext } from 'react'

export const TableContext = createContext({ staticLayout: false })
export const useTableContext = () => useContext(TableContext)
export const { Provider, Consumer } = TableContext
