import React from 'react';
import Page from '../../components/pages/Page';

const i18n = {
  titleId: 'social',
  content: (
    <>
      <p>Hi!</p>

    </>
  ),
  description: `
    Hier wird der Socail Media content sein.
  `,
};

export default (props) => <Page i18n={i18n} {...props} />;
