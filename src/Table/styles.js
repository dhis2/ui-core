import css from 'styled-jsx/css'
import { colors, spacers } from '../theme.js'

const tableStyles = css`
    table {
        border: 1px solid ${colors.grey300};
        background-color: ${colors.white};
        min-width: 100%;
        text-align: left;
        border-collapse: collapse;
        vertical-align: top;
    }
`

const tableStylesStacked = css`
    table {
        display: block;
        border: 0;
    }
`

const tableHeadStyles = css`
    thead {
        background: ${colors.grey200};
    }
`

const tableHeadStylesStacked = css`
    thead {
        display: none;
    }
`

const tableBodyStylesStacked = css`
    tbody {
        display: block;
    }
`

const tableFootStylesStacked = css`
    tfoot {
        display: block;
        margin-top: ${spacers.dp32};
    }
`

const tableRowStyles = css`
    tr {
        min-height: 45px;
    }

    :global(tbody) tr:nth-child(even) {
        background: ${colors.grey050};
    }

    :global(tbody) tr:hover {
        background: ${colors.blue050};
    }

    :global(thead) tr,
    :global(tbody) tr {
        min-height: 36px;
    }
`

const tableRowStylesStacked = css`
    tr {
        display: block;
        border: 1px solid ${colors.grey300};
    }

    tr:nth-child(even) {
        background: none;
    }

    :global(tbody) tr:hover {
        background: none;
    }

    tr + tr {
        margin-top: ${spacers.dp32};
    }

    tr:nth-child(even) :global(td) {
        background: ${colors.grey050};
    }
`

const tableCellHeadStyles = css`
    th {
        border-bottom: 1px solid ${colors.grey300};
        padding: 0 ${spacers.dp12};
        font-size: 13px;
        font-weight: normal;
        color: ${colors.grey800};
    }

    div {
        min-height: 36px;
    }
`

const tableCellStyles = css`
    td {
        border-bottom: 1px solid ${colors.grey300};
        padding: 0 12px;
        font-size: 14px;
        line-height: 18px;
    }

    div {
        min-height: 45px;
    }

    :global(tfooter) div {
        min-height: 36px;
    }
`

const tableCellStylesStacked = css`
    td {
        width: 100%;
        display: block;
    }
`

const tableCellTitleStyleStacked = css`
    .title {
        display: none;
    }

    .content {
        display: block;
    }

    :global(tbody) .title {
        display: block;
        white-space: normal;
        min-height: 24px;
        padding: 8px 0 0 0;
        white-space: nowrap;
        font-size: 13px;
        font-weight: normal;
        color: ${colors.grey800};
    }

    .content {
        display: block;
        padding: 0;
        min-height: 32px;
    }

    .content:first-child {
        padding-top: 8px;
        padding-bottom: 8px;
    }
`

const tableCellTextStyles = css`
    span {
        display: inline-block;
        padding: 9px 0;
    }

    :global(tbody) span {
        padding: 13px 0;
    }
`

const tableCellTextStylesStacked = css`
    @media (max-width: 768px) {
        :global(tbody) span {
            padding: 3px 0;
        }
    }
`

export {
    tableStyles,
    tableStylesStacked,
    tableHeadStyles,
    tableHeadStylesStacked,
    tableBodyStylesStacked,
    tableFootStylesStacked,
    tableRowStyles,
    tableRowStylesStacked,
    tableCellHeadStyles,
    tableCellStyles,
    tableCellStylesStacked,
    tableCellTitleStyleStacked,
    tableCellTextStyles,
    tableCellTextStylesStacked,
}
