import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';

class MenuItem extends Component {
    selectHandler = event => {
        const { option, itemSelectHandler, closePopover } = this.props;
        const { value, selectHandler } = option;
        const handler = selectHandler || itemSelectHandler;
        handler(event, value, this.props.option);
        closePopover();
    };

    renderOptionFromObject() {
        const { label, icon } = this.props.option;
        return (
            <React.Fragment>
                {icon && <Icon name={icon} />}
                {label}
            </React.Fragment>
        );
    }

    render() {
        const { option } = this.props;

        return (
            <li className="d2ui-menu-item" onClick={this.selectHandler}>
                {React.isValidElement(option) ? option : this.renderOptionFromObject()}
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
        }),
        PropTypes.element,
    ]),
    itemSelectHandler: PropTypes.func,
    closePopover: PropTypes.func.isRequired,
};

export default MenuItem;
