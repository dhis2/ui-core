import React from 'React';
import PropTypes from 'prop-types';
import MenuItem from './MenuItem';

const Menu = ({ options }) => (
    <ul className="menu">
        {options.map(option => <MenuItem className="menu-item" {...option} />)}
    </ul>
);

Menu.propTypes = {
    options: PropTypes.array.isRequired,
};
