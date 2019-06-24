import React from 'react'
import css from 'styled-jsx/css'

export const TableFoot = ({ children }) => (
    <tfoot>
        {children}

        <style jsx>{`
            tfoot {
            }

            @media (max-width: 768px) {
                tfoot {
                    display: block;
                    margin-top: 16px;
                }
            }

            @media (max-width: 400px) {
                tfoot {
                    margin-top: 32px;
                }
            }
        `}</style>
    </tfoot>
)
