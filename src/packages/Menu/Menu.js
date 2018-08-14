import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import MenuItem from './MenuItem';
import Paper from '../Paper';
import './menu.css';

const Menu = ({ options, selectHandler, closePopover, className, style, children }) => (
    <Paper elevation={4}>
        <ul className={classNames('d2ui-menu', className)} style={style}>
            {children
                ? children
                : options.map(({ onClick, ...rest }, index) => (
                      <MenuItem
                          key={`key-${index}`}
                          onClick={onClick || selectHandler}
                          closePopover={closePopover}
                          {...rest}
                      />
                  ))}
        </ul>
    </Paper>
);

Menu.propTypes = {
    options: PropTypes.array,
    selectHandler: PropTypes.func,
    closePopover: PropTypes.func,
    className: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.arrayOf(PropTypes.element),
};

export default Menu;
