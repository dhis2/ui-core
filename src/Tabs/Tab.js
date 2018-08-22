import React from 'react';
import PropTypes from 'prop-types';

const Tab = ({ label, icon, selectHandler, active, layout }) => {
    return <div />;
};

Tab.propTypes = {
    label: PropTypes.string,
    icon: PropTypes.string,
    selectHandler: PropTypes.func.isRequired,
    active: PropTypes.boolean.isRequired,
    stacked: PropTypes.boolean.isRequired,
};

export default Tab;
