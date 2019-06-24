import React from 'react'
import css from 'styled-jsx/css'

export const TableCellHead = ({ children }) => (
    <th>
        <div>{children}</div>

        <style jsx>{`
            th {
                border-bottom: 1px solid #e8edf2;
                padding: 0 12px;
            }

            @media (max-width: 768px) {
                th {
                    display: block;
                }
            }

            div {
                min-height: 36px;
            }
        `}</style>
    </th>
)
