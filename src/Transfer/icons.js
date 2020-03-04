import React from 'react'
import propTypes from '@dhis2/prop-types'

export const IconAddAll = ({ dataTest }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        data-test={`${dataTest}-iconaddall`}
    >
        <g fill="none" fillRule="evenodd">
            <polygon
                fill="#404B5A"
                fillRule="nonzero"
                points="6 2 4.94 3.06 9.13 7.25 0 7.25 0 8.75 9.13 8.75 4.94 12.94 6 14 12 8"
            />

            <polygon
                fill="#404B5A"
                fillRule="nonzero"
                points="10 2 8.94 3.06 13.13 7.25 13.9 8 13.13 8.75 8.94 12.94 10 14 16 8"
            />
        </g>
    </svg>
)

IconAddAll.propTypes = {
    dataTest: propTypes.string.isRequired,
}

export const IconAddIndividual = ({ dataTest }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        data-test={`${dataTest}-iconaddindividual`}
    >
        <polygon
            fill="#404B5A"
            points="8 2 6.94 3.06 11.13 7.25 2 7.25 2 8.75 11.13 8.75 6.94 12.94 8 14 14 8"
        />
    </svg>
)

IconAddIndividual.propTypes = {
    dataTest: propTypes.string.isRequired,
}

export const IconRemoveAll = ({ dataTest }) => (
    <svg
        width="16px"
        height="16px"
        viewBox="0 0 16 16"
        data-test={`${dataTest}-iconremoveall`}
        xmlns="http://www.w3.org/2000/svg"
    >
        <g fill="none" fillRule="evenodd">
            <polygon
                fill="#404B5A"
                fillRule="nonzero"
                points="10 2 8.94 3.06 13.13 7.25 4 7.25 4 8.75 13.13 8.75 8.94 12.94 10 14 16 8"
                transform="matrix(-1 0 0 1 20 0)"
            />

            <polygon
                fill="#404B5A"
                fillRule="nonzero"
                points="1.06 2 0 3.06 4.19 7.25 4.96 8 4.19 8.75 0 12.94 1.06 14 7.06 8"
                transform="matrix(-1 0 0 1 7.06 0)"
            />
        </g>
    </svg>
)

IconRemoveAll.propTypes = {
    dataTest: propTypes.string.isRequired,
}

export const IconRemoveIndividual = ({ dataTest }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        data-test={`${dataTest}-iconremoveindividual`}
    >
        <polygon
            fill="#404B5A"
            points="8 2 6.94 3.06 11.13 7.25 2 7.25 2 8.75 11.13 8.75 6.94 12.94 8 14 14 8"
            transform="matrix(-1 0 0 1 16 0)"
        />
    </svg>
)

IconRemoveIndividual.propTypes = {
    dataTest: propTypes.string.isRequired,
}

export const IconMoveDown = ({ dataTest }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        data-test={`${dataTest}-iconmoveup`}
    >
        <polygon
            fill="#404B5A"
            points="8 2 6.94 3.06 11.13 7.25 2 7.25 2 8.75 11.13 8.75 6.94 12.94 8 14 14 8"
            transform="matrix(0 1 1 0 0 0)"
        />
    </svg>
)

IconMoveDown.propTypes = {
    dataTest: propTypes.string.isRequired,
}

export const IconMoveUp = ({ dataTest }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        data-test={`${dataTest}-iconmoveup`}
    >
        <polygon
            fill="#404B5A"
            points="8 2 6.94 3.06 11.13 7.25 2 7.25 2 8.75 11.13 8.75 6.94 12.94 8 14 14 8"
            transform="rotate(-90 8 8)"
        />
    </svg>
)

IconMoveUp.propTypes = {
    dataTest: propTypes.string.isRequired,
}
