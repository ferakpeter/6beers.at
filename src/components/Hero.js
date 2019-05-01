import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Grid, Cell } from 'styled-css-grid';
import { media, visible } from '../constants/responsive';
import { FormattedMessage, injectIntl } from 'react-intl';
import Link from './Link';
import Button from './Button';
import Img from 'gatsby-image';
import { intlRoute } from '../interpolations';
import H1 from './H1';

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

const FullSizeImg = styled(Img)`
  height: 100%;
  width: 100%;
`;

const GridContainer = styled(Grid)`
  width: 100%;
`;

const TextGrid = styled(GridContainer)`
  border: ${props => props.theme.blog.list.item.border};
  border-radius: 0.25rem;
  grid-template-rows: repeat(1,1fr);
  grid-template-columns: 1fr;
  font-family: ${props => props.theme.fonts.Brand};
  color: ${props => props.theme.colors.white};
  margin: auto;
  padding: 5rem 0;
  position: relative; // fix for Google search bot (Chrome M41); https://developers.google.com/search/docs/guides/rendering
  z-index: 1;
  ${media.md`
    grid-template-columns: 3fr 3fr;
  `}
`;

const BeerGrid = styled(Grid)`
  grid-template-rows: 1;
  grid-template-columns: 3;
`;

const ActionLink = styled(Button)`
  max-width: 500px;
`;

const P = styled.p`
  ${visible.md}
  max-width: 30rem;
`;

const BeerImg = styled(Img)`
  max-height: 40px;
`;

const MoreBlurred = styled.div`
  position: relative;
  left: 40px;
  transform: scale(.85);
  filter: blur(2px);
  z-index: 1;
`;

const FlagshipBeer = styled.div`
  color: $text-color-inv;
  position: relative; // fix for Google search bot (Chrome M41); https://developers.google.com/search/docs/guides/rendering
  z-index: 1;
`;

const Blurred = styled.div`
  position: relative;
  left: -30px;
  transform: scale(.9);
  filter: blur(1px);
  z-index: 0;
`;

const Hero = (props) => {

  const route = intlRoute(props.intl, props.route);

  // const { menu, url } = this.props;
  return (
    <Container>
      <Background>
        <FullSizeImg fluid={props.heroImage.childImageSharp.fluid} />
      </Background>
      <TextGrid>
        <Cell center middle>
          <Grid
            columns={"5rem 5rem 5rem"}
            >
            <Cell>
              <MoreBlurred>
                <Img fixed={props.beerImage.childImageSharp.fixed} />
              </MoreBlurred>
            </Cell>
            <Cell>
              <FlagshipBeer>
                <Img fixed={props.beerImage.childImageSharp.fixed} />
              </FlagshipBeer>
            </Cell>
            <Cell>
              <Blurred>
                <Img fixed={props.beerImage.childImageSharp.fixed} />
              </Blurred>
            </Cell>
          </Grid>
        </Cell>
        <Cell middle>
          <FormattedMessage id={props.headlineMessage} defaultText={props.headlineMessage}>
            {(translation) => (
              <h1>{translation}</h1>
              )
            }
          </FormattedMessage>
          <FormattedMessage id={props.sublineMessage} defaultText={props.sublineMessage}>
            {(translation) => (
              <P>{translation}</P>
              )
            }
          </FormattedMessage>
          <FormattedMessage id={props.actionMessage} defaultText={props.actionMessage}>
            {(translation) => (
                <ActionLink
                  color='black'
                  to={route}
                > {translation} </ActionLink>
              )
            }
          </FormattedMessage>
        </Cell>
      </TextGrid>
    </Container>
  );

};

// Hero.propTypes = {
//   menu: PropTypes.array.isRequired,
//   url: PropTypes.string
// };

export default injectIntl(Hero);
