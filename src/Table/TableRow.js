import React from 'react'
import css from 'styled-jsx/css'

export const TableRow = ({ children }) => (
    <tr>
        {children}

        <style jsx>{`
            tr {
                min-height: 45px;
            }

            tr:nth-child(even) {
                background: #fbfcfd;
            }

            :global(thead) tr,
            :global(tbody) tr {
                min-height: 36px;
            }

            @media (max-width: 768px) {
                tr {
                    display: table;
                    width: 100%;
                    border: 1px solid #e8edf2;
                }

                tr + tr {
                    margin-top: 16px;
                }
            }

            @media (max-width: 400px) {
                tr {
                    display: block;
                }

                tr:nth-child(even) {
                    background: none;
                }

                tr + tr {
                    margin-top: 32px;
                }

                tr:nth-child(even) :global(td) {
                    background: #fbfcfd;
                }
            }
        `}</style>
    </tr>
)
