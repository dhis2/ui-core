import React from 'React';
import PropTypes from 'prop-types';

const MenuItem = ({ content, ...rest }) => (
    <li className="menu-item" {...rest}>
        {content}
    </li>
);

MenuItem.propTypes = {
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

export default MenuItem;
