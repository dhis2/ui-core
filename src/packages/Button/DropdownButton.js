import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import { DropdownMenu } from '../Menu';
import { DROPDOWN } from './variants';

const DropdownButton = ({ dropdownMenuProps, ...rest }) => {
    return (
        <div>
            <Button type={DROPDOWN} {...rest} />
            <DropdownMenu {...dropdownMenuProps} />
        </div>
    );
};

DropdownButton.propTypes = {
    dropdownMenuProps: PropTypes.object.isRequired,
};

export default DropdownButton;
