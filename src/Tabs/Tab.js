import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../../dist/Icon';
import bemClassNames from '../../dist/utils/bemClassNames';
import './tab.css';

const bem = bemClassNames('d2ui-tab');

const Tab = ({ label, icon, selectHandler, active, disabled, stacked, addTabRef }) => {
    return (
        <button
            className={`${bem.b({ active, disabled, stacked })} d2ui-align-icon`}
            onClick={selectHandler}
            ref={addTabRef}
        >
            {icon && <Icon name={icon} />}
            {label && <span>{label}</span>}
        </button>
    );
};

Tab.propTypes = {
    label: PropTypes.string,
    icon: PropTypes.string,
    selectHandler: PropTypes.func,
    addTabRef: PropTypes.func.isRequired,
    active: PropTypes.bool,
    disabled: PropTypes.bool,
    stacked: PropTypes.bool,
};

Tab.defaultProps = {
    active: false,
    disabled: false,
    stacked: false,
};

export default Tab;
