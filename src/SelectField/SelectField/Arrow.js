import PropTypes from 'prop-types'
import React from 'react'
import css from 'styled-jsx/css'
import cx from 'classnames'
import { ArrowUp, ArrowDown } from '../../icons/Arrow'

const styles = css`
    div {
        margin-right: 4px;
    }
`

export const Arrow = ({ open }) => (
    <div>
        {open ? <ArrowUp /> : <ArrowDown />}

        <style jsx>{styles}</style>
    </div>
)
