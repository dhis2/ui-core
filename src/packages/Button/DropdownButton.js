import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import { DropdownMenu } from '../Menu';
import { PRIMARY, RAISED } from './variants';

class DropdownButton extends Component {
    constructor(props) {
        super(props);
        this.anchorRef = null;
    }

    getAnchorRef = () => this.anchorRef;
    setAnchorRef = node => (this.anchorRef = node);

    render() {
        const { options, variant, dropdownMenuProps, ...rest } = this.props;
        return (
            <div ref={this.setAnchorRef} className="d2ui-dropdown-button">
                <Button variant={variant} {...rest} />
                <DropdownMenu
                    {...dropdownMenuProps}
                    options={options}
                    variant={variant}
                    getAnchorRef={this.getAnchorRef}
                />
            </div>
        );
    }
}

DropdownButton.propTypes = {
    // prettier-ignore
    options: PropTypes.arrayOf(PropTypes.oneOfType(
        [PropTypes.object, PropTypes.element])
    ).isRequired,
    variant: PropTypes.oneOf([PRIMARY, RAISED]),
    dropdownMenuProps: PropTypes.object,
};

DropdownButton.defaultProps = {
    variant: PRIMARY,
};

export default DropdownButton;
