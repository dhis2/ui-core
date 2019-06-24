import React from 'react'
import css from 'styled-jsx/css'

export const TableHead = ({ children }) => (
    <thead>
        {children}

        <style jsx>{`
            thead {
            }

            @media (max-width: 768px) {
                thead {
                    display: none;
                }
            }
        `}</style>
    </thead>
)
