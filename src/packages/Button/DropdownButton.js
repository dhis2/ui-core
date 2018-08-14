import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import { DropdownMenu } from '../Menu';
import classNames from 'classnames';

class DropdownButton extends Component {
    constructor(props) {
        super(props);
        this.anchorRef = null;
    }

    getAnchorRef = () => this.anchorRef;
    setAnchorRef = node => (this.anchorRef = node);

    render() {
        const { options, buttonProps, className, menuProps, children } = this.props;

        const mergedMenuProps = {
            ...menuProps,
            options,
        };

        return (
            <div
                ref={this.setAnchorRef}
                className={classNames('d2ui-dropdown-button', className)}
            >
                <Button {...buttonProps}>{children}</Button>
                <DropdownMenu
                    buttonVariant={buttonProps.variant}
                    getAnchorRef={this.getAnchorRef}
                    menuProps={mergedMenuProps}
                />
            </div>
        );
    }
}

DropdownButton.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object, PropTypes.element]))
        .isRequired,
    buttonProps: PropTypes.object.isRequired,
    menuProps: PropTypes.object,
};

export default DropdownButton;
