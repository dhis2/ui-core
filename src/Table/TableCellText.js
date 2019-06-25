import React from 'react'
import propTypes from 'prop-types'
import css from 'styled-jsx/css'

export const TableCellText = ({ label }) => (
    <span>
        {label}

        <style jsx>{`
            span {
                display: inline-block;
                padding: 9px 0;
                font-size: 14px;
                line-height: 18px;
            }

            :global(tbody) span {
                padding: 13px 0;
            }
        `}</style>
    </span>
)

TableCellText.propTypes = {
    label: propTypes.string,
}
