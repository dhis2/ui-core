import React from 'react';
import PropTypes from 'prop-types';
import { bemClassNames } from '../utils';

import '../theme/index.css';

const bem = bemClassNames('d2ui-app');

const UI = ({ theme, direction, children }) => (
    <div dir={direction} className={bem.b(theme)}>
        {children}
    </div>
);

UI.propTypes = {
    direction: PropTypes.oneOf('ltr', 'rtl'),
    theme: PropTypes.string,
    children: PropTypes.node,
};

UI.defaultProps = {
    direction: 'ltr',
    theme: 'default',
};

export default UI;
