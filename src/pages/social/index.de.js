import React from 'react';
import Page from '../../components/pages/Page';

const i18n = {
  titleId: 'social',
  content: (
    <>
      <p>Hallo!</p>

    </>
  ),
  description: `
    Here will be social media content.
  `,
};

export default (props) => <Page i18n={i18n} {...props} />;
