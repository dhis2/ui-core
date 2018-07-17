import React from 'React';
import PropTypes from 'prop-types';
import Menu from './Menu';

const DropdownMenu = ({ options }) => {
    return (
        <div className="dd-wrapper">
            <div className="dd-header">
                <div className="dd-header-title" />
            </div>
            <Menu options={options} />
        </div>
    );
};

DropdownMenu.propTypes = {
    options: PropTypes.array.isRequired,
};

export default DropdownMenu;
