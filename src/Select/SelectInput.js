import React from 'react'
import propTypes from 'prop-types'
import { ArrowDown, ArrowUp } from '../icons/Arrow.js'
import { colors } from '../theme.js'

const SelectInput = ({ placeholder, selected, open }) => {
    const Arrow = open ? ArrowUp : ArrowDown

    return (
        <React.Fragment>
            <div className="input">
                {selected ? selected : placeholder}
                <Arrow className="arrow" />
            </div>

            <style jsx>{`
                .input {
                    align-items: center;
                    border-radius: 3px;
                    border: 1px solid ${colors.grey500};
                    box-sizing: border-box;
                    color: ${colors.grey900};
                    display: flex;
                    font-size: 14px;
                    height: 34px;
                    line-height: 16px;
                    padding: 13px 0 11px 11px;
                    position: relative;
                    box-shadow: inset 0 0 0 1px rgba(102, 113, 123, 0.15),
                        inset 0 1px 2px 0 rgba(102, 113, 123, 0.1);
                }

                .arrow {
                    margin-left: auto;
                }
            `}</style>
        </React.Fragment>
    )
}

SelectInput.propTypes = {
    placeholder: propTypes.string.isRequired,
    selected: propTypes.string.isRequired,
    open: propTypes.bool.isRequired,
}

export { SelectInput }
