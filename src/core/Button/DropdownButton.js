/** @format */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import { DropdownMenu } from '../Menu'
import s from './styles'

class DropdownButton extends Component {
    anchorRef = null
    getAnchorRef = () => this.anchorRef

    render() {
        return (
            <div ref={c => (this.anchorRef = c)} className={s('dropdown')}>
                <Button kind={this.props.kind} onClick={this.props.onClick}>
                    {this.props.label}
                </Button>
                <DropdownMenu
                    kind={this.props.kind}
                    list={this.props.list}
                    onSelect={this.props.onSelect}
                    getAnchorRef={this.getAnchorRef}
                />
            </div>
        )
    }
}

DropdownButton.defaultProps = {
    kind: 'primary',
}

DropdownButton.propTypes = {
    kind: PropTypes.string,
    label: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
    list: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,
    onSelect: PropTypes.func.isRequired,
}

export { DropdownButton }
export default DropdownButton
