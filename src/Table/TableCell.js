import React from 'react'
import propTypes from 'prop-types'
import css from 'styled-jsx/css'

export const TableCell = ({ children, title, colspan, rowspan }) => (
    <td colspan={colspan} rowspan={rowspan}>
        <div>{children}</div>

        <style jsx>{`
            td {
                border-bottom: 1px solid #e8edf2;
                padding: 0 12px;
                font-size: 14px;
            }

            div {
                min-height: 45px;
            }

            :global(tfooter) div {
                min-height: 36px;
            }

            @media (max-width: 768px) {
                td {
                    display: table-row;
                    width: 100%;
                }

                td:before {
                    content: '${title}:';
                    display: table-cell;
                    white-space: nowrap;
                    padding: 0 16px;
                    font-weight: bold;
                }

                :global(tfoot) td:before {
                    display: none;
                }

                div {
                    display: table-cell;
                    width: 100%;
                    padding: 0 16px;
                }
            }

            @media (max-width: 400px) {
                td {
                    display: block;
                    border: 1px solid #E8EDF2;
                    margin-top: 8px;
                }

                td:first-child {
                    margin-top: 0;
                }

                td:before {
                    display: block;
                    white-space: normal;
                    min-height: 45px;
                    border-bottom: 1px solid #e8edf2;
                    line-height: 18px;
                    padding: 12px 0;
                }

                :global(tfooter) td:before {
                    min-height: 36px;
                }

                div {
                    display: block;
                    padding: 0;
                }
            }
        `}</style>
    </td>
)

TableCell.propTypes = {
    title: propTypes.string,
    colspan: propTypes.string,
    rowspan: propTypes.string,
}
