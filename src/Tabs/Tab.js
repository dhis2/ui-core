import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../../dist/Icon';
import bemClassNames from '../../dist/utils/bemClassNames';
import './tab.css';

const bem = bemClassNames('d2-ui-tab');

const Tab = ({ label, icon, selectHandler, active, disabled, stacked, addTabRef }) => {
    return (
        <button
            className={`${bem.b({ active, disabled, stacked })} d2ui-align-icon`}
            onClick={selectHandler}
            ref={addTabRef}
        >
            {icon && <Icon name={icon} />}
            <span>{label}</span>
        </button>
    );
};

Tab.propTypes = {
    label: PropTypes.string,
    icon: PropTypes.string,
    selectHandler: PropTypes.func,
    addTabRef: PropTypes.func.isRequired,
    active: PropTypes.boolean,
    disabled: PropTypes.boolean,
    stacked: PropTypes.boolean,
};

Tab.defaultProps = {
    active: false,
    disabled: false,
    stacked: false,
};

export default Tab;
