import React from 'react'
import css from 'styled-jsx/css'

export const TableBody = ({ children }) => (
    <tbody>
        {children}

        <style jsx>{`
            tbody {
            }

            @media (max-width: 768px) {
                tbody {
                    display: block;
                }
            }
        `}</style>
    </tbody>
)
