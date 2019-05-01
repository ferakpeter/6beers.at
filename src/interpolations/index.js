import siteMetadata from '../data/siteMetadata';

// if intl is undefined, then likely the function injectIntl is missing on the component
export const intlRoute = (intl, route) => {
  return `/${intl.locale !== siteMetadata.languages.defaultLangKey ? intl.locale : ''}${route}`;
}

export const formatReadingTime = (minutes) => {
  let cups = Math.round(minutes / 5);
  return `${new Array(cups || 1).fill('☕️').join('')} ${minutes} min read`;
};