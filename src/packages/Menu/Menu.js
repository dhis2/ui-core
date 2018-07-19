import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from './MenuItem';
import Paper from '../Paper';
import './menu.css';

const Menu = ({ options, itemSelectHandler, closePopover, ...props }) => (
    <Paper elevation={4}>
        <ul className="d2ui-menu" {...props}>
            {options.map((option, index) => (
                <MenuItem
                    key={`key-${index}`}
                    option={option}
                    itemSelectHandler={itemSelectHandler}
                    closePopover={closePopover}
                />
            ))}
        </ul>
    </Paper>
);

Menu.propTypes = {
    options: PropTypes.array.isRequired,
    itemSelectHandler: PropTypes.func,
    closePopover: PropTypes.func.isRequired,
};

export default Menu;
