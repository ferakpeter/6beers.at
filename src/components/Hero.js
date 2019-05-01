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
  min-height: 65vh;
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
  padding: 3rem 0;
  position: relative; // fix for Google search bot (Chrome M41); https://developers.google.com/search/docs/guides/rendering
  z-index: 1;
  ${media.md`
    grid-template-columns: 10rem 1fr 1rem 1fr 10rem;
    padding: 10rem 0;
  `}
`;

const BeerGrid = styled(Grid)`
  margin: auto;
`;

const ActionLink = styled(Button)`
  margin: auto;
  max-width: 20rem;
  text-align: center;
  ${media.md`
    max-width: 500px;
    margin: 0;
    `}
`;

const Brand = styled.p`
  font-family: ${props => props.theme.fonts.Brand};
  font-size: 2rem;
  text-align: center;
  margin: 0 0 0.8rem 0;
  ${media.md`
    text-align: left;
  `}
`;

const P = styled.p`
  ${visible.md}
  max-width: 30rem;
  margin: 0 0 1rem 0;
  line-height: 1.5;
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
        <Cell> </Cell>
        <Cell center middle>
          <BeerGrid
            columns={"5rem 5rem 5rem"}
            >
            <Cell>
              <MoreBlurred>
                <Img fluid={props.beerImage.childImageSharp.fluid} />
              </MoreBlurred>
            </Cell>
            <Cell>
              <FlagshipBeer>
                <Img fluid={props.beerImage.childImageSharp.fluid} />
              </FlagshipBeer>
            </Cell>
            <Cell>
              <Blurred>
                <Img fluid={props.beerImage.childImageSharp.fluid} />
              </Blurred>
            </Cell>
          </BeerGrid>
        </Cell>
        <Cell> </Cell>
        <Cell middle>
          <FormattedMessage id={props.headlineMessage} defaultText={props.headlineMessage}>
            {(translation) => (
              <Brand>{translation}</Brand>
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
        <Cell> </Cell>
      </TextGrid>
    </Container>
  );

};

// Hero.propTypes = {
//   menu: PropTypes.array.isRequired,
//   url: PropTypes.string
// };

export default injectIntl(Hero);
