import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Grid, Cell } from 'styled-css-grid';
import { media, visible } from '../constants/responsive';
import { FormattedMessage } from 'react-intl';
import Link from './Link';
import Button from './Button';

const Container = styled.section`
  background-color: $primary-color;
  min-height: 75vh;
  position: relative;
  width: 100%;
`;

const Background = styled.div`
  bottom: 0;
  display: block;
  left: 0;
  overflow: hidden;
  position: absolute;
  right: 0;
  top: 0;
`;

const Text = styled.div`
  color: ${props => props.theme.colors.white};
  margin: auto;
  padding: 5rem 0;
  position: relative; // fix for Google search bot (Chrome M41); https://developers.google.com/search/docs/guides/rendering
  z-index: 1;
`;

const Hero = (props) => {

  // const { menu, url } = this.props;
  return (
    <Container>
      <Background>
        {props.heroImage}
      </Background>
      <Text>
        <FormattedMessage id={props.headlineId} defaultText={props.headlineId}>
          {(text) => (
            <h1>{text}</h1>
            )
          }
        </FormattedMessage>
        <FormattedMessage id={props.sublineId} defaultText={props.sublineId}>
          {(text) => (
            <p>{text}</p>
            )
          }
        </FormattedMessage>
        <FormattedMessage id={props.actionId} defaultText={props.actionId}>
          {(text) => (
              <Button
                label={props.actionId}
                to={props.to}
              />
            )
          }
        </FormattedMessage>
      </Text>
    </Container>
  );

};

// Hero.propTypes = {
//   menu: PropTypes.array.isRequired,
//   url: PropTypes.string
// };

export default Hero;
