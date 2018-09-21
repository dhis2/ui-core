import React from 'react';
import PropTypes from 'prop-types';
import { bemClassNames } from '../utils';
import './logo.css';
import dhis2_icon_rgb_negative from './svg/dhis2_icon_rgb_negative.svg';
import dhis2_icon_rgb_positive from './svg/dhis2_icon_rgb_positive.svg';
import dhis2_logo_rgb_negative from './svg/dhis2_logo_rgb_negative.svg';
import dhis2_logo_rgb_positive from './svg/dhis2_logo_rgb_positive.svg';

const bem = bemClassNames('d2ui-logo');

const imageLookup = {
    logo: {
        positive: dhis2_logo_rgb_positive,
        negative: dhis2_logo_rgb_negative,
    },
    icon: {
        positive: dhis2_icon_rgb_positive,
        negative: dhis2_icon_rgb_negative,
    },
};

const Logo = ({ reverse, icon, width, altText }) => {
    const version = icon ? 'icon' : 'logo';
    const variant = reverse ? 'negative' : 'positive';
    const src = imageLookup[version][variant];
    const style = width ? { width } : null;

    return <img alt={altText} src={src} className={bem.b(version)} style={style} />;
};

Logo.propTypes = {
    reverse: PropTypes.bool,
    icon: PropTypes.bool,
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    altText: PropTypes.string,
};

Logo.defaultProps = {
    reverse: false,
    icon: false,
    altText: 'DHIS2 Logo',
};

export default Logo;
