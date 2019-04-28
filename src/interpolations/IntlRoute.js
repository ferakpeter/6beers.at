import siteMetadata from '../data/siteMetadata';

// if intl is undefined, then likely the function injectIntl is missing on the component
const intlRoute = (intl, route) => { 
  console.log('locale: ' + intl.locale);
  console.log('default: ' + siteMetadata.languages.defaultLangKey);
  return `/${intl.locale !== siteMetadata.languages.defaultLangKey ? intl.locale : ''}${route}`;
}

export default intlRoute;