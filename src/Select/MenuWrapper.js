import React from 'react'
import ReactDOM from 'react-dom'
import propTypes from '@dhis2/prop-types'
import { resolve } from 'styled-jsx/css'
import { Card } from '../Card.js'
import { layers } from '../theme.js'
import { Backdrop } from '../Backdrop.js'

const MenuWrapper = ({
    children,
    maxHeight,
    className,
    menuRef,
    menuTop,
    menuLeft,
    menuWidth,
    zIndex,
    onClick,
}) => {
    const { styles, className: cardClassName } = resolve`
        height: auto;
        max-height: ${maxHeight};
        overflow: auto;
    `
    return ReactDOM.createPortal(
        <Backdrop onClick={onClick} transparent zIndex={zIndex}>
            <div className={className} ref={menuRef}>
                <Card className={cardClassName}>{children}</Card>

                {styles}

                <style jsx>{`
                    div {
                        position: absolute;
                        top: ${menuTop};
                        left: ${menuLeft};
                        width: ${menuWidth};
                    }
                `}</style>
            </div>
        </Backdrop>,
        document.body
    )
}

MenuWrapper.defaultProps = {
    maxHeight: '280px',
    zIndex: layers.applicationTop,
}

MenuWrapper.propTypes = {
    menuLeft: propTypes.string.isRequired,
    menuRef: propTypes.object.isRequired,
    menuTop: propTypes.string.isRequired,
    menuWidth: propTypes.string.isRequired,
    selectRef: propTypes.object.isRequired,
    children: propTypes.node,
    className: propTypes.string,
    maxHeight: propTypes.string,
    zIndex: propTypes.number,
    onClick: propTypes.func,
}

export { MenuWrapper }
