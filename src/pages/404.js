import React from 'react';
import Page from '../components/pages/Page';
import Button from '../components/Button';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { injectIntl, FormattedMessage } from 'react-intl';
import intlRoute from '../interpolations/IntlRoute';

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;`;

const Message = styled.div`
  margin: auto;
  padding: 2rem;
  text-align: center;`;

const Text = styled.s`
  font-size: var(--font-size-title);`;

const NotFound = (props) => {

  const i18n = {
    titleId: 'notFound',
    content: (
      <>
        <Message>
          <FormattedMessage id='notFoundText'>
            {(text) => <p> {text} </p>}
          </FormattedMessage>
          <FormattedMessage id='homeRoute'>
            {(route) => 
              <FormattedMessage id='notFoundAction'>
                {(text) => 
                  <Button title={text} to={route}> 
                    {text}
                  </Button>
                }
              </FormattedMessage>
            }
          </FormattedMessage>
        </Message>
      </>
    ),
    description: `Craft Beer from Breitenfurt bei Wien. TropicAle, Gold Rush, Limelight, High n Dry, Moonlight, Black Dog, Dark Side`
  };

  return ( <Page i18n={i18n} {...props} /> );
}

export default NotFound;
