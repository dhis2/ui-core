/**
 * This function will set the dir attribute on the HTML tag and add a theme class to the body tag if required.
 * Since it takes userSettings as an option and returns them too, it fits nicely into a chained promise sequence used to bootstrap a DHIS2 React app:
 * @example
 * ...
 * .then(getUserSettings)
 * .then(setDirAndThemeAttributes)
 * .then(configI18n)
 * ...
 * @example
 * @param {Object} userSettings - The userSettings available in on the d2 object (d2.currentUser.userSettings.settings) or returned from the from the `getUserSettings` function exposed by d2
 */
export default function(userSettings) {
    // Will produce "en" from "en_EN" as well as "en"
    const uiLanguage = userSettings.keyUiLocale.split('_')[0];
    const dir = RTL_LANGUAGES.has(uiLanguage) ? 'rtl' : 'ltr';
    // Currently formatted like this: "light_blue/light_blue.css
    // Since we only want to put a class on the body, we need the first part
    const theme = userSettings.keyCurrentStyle.split('/')[0];

    document.documentElement.setAttribute('dir', dir);

    // Don't set a class for the default theme
    if (theme !== 'light_blue') {
        document.body.classList.add(theme);
    }

    return userSettings;
}

// https://meta.wikimedia.org/wiki/Template:List_of_language_names_ordered_by_code
const RTL_LANGUAGES = new Set([
    'ar',
    'arc',
    'dv',
    'fa',
    'ha',
    'he',
    'khw',
    'ks',
    'ku',
    'ps',
    'ur',
    'yi',
]);
