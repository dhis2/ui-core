import React, { Component, isValidElement, Fragment } from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import SubMenu from './SubMenu';

class MenuItem extends Component {
    selectHandler = event => {
        const { option, itemSelectHandler, closePopover } = this.props;
        const { value, selectHandler } = option;
        const handler = selectHandler || itemSelectHandler;
        handler(event, value, this.props.option);
        closePopover && closePopover();
    };

    renderMenuItemContent() {
        const { option, secundaryIcon } = this.props;

        if (isValidElement(option)) {
            return option;
        }

        const { label, icon } = option;
        return (
            <Fragment>
                {icon && <Icon name={icon} />}
                {label}
                {secundaryIcon && <Icon className="secundary" name={secundaryIcon} />}
            </Fragment>
        );
    }

    render() {
        const { option, itemSelectHandler } = this.props;

        if (option.menuItems) {
            return <SubMenu {...option} itemSelectHandler={itemSelectHandler} />;
        }

        return (
            <li className="d2ui-menu-item" onClick={this.selectHandler}>
                {this.renderMenuItemContent()}
            </li>
        );
    }
}

MenuItem.propTypes = {
    option: PropTypes.oneOfType([
        PropTypes.shape({
            value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
            label: PropTypes.string,
            icon: PropTypes.string,
            selectHandler: PropTypes.func,
            menuItems: PropTypes.arrayOf(
                PropTypes.oneOfType([PropTypes.element, PropTypes.object])
            ),
        }),
        PropTypes.element,
    ]),
    itemSelectHandler: PropTypes.func,
    closePopover: PropTypes.func,
};

export default MenuItem;
