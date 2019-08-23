import React from 'react';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { StaticQuery, graphql, withPrefix } from 'gatsby';
import { addLocaleData, IntlProvider, FormattedMessage } from 'react-intl';
import enData from 'react-intl/locale-data/en';
import deData from 'react-intl/locale-data/de';
import {
  getLangs, getUrlForLang, getCurrentLangKey, isHomePage,
} from 'ptz-i18n';
import Helmet from 'react-helmet';
import theme from '../themes/theme';
import de from '../data/messages/de';
import en from '../data/messages/en';
import FixedContainer from './FixedContainer';
import Footer from './Footer';
import Header from './Header';

const messages = { en, de };

addLocaleData([...enData, ...deData]);

const Container = styled(FixedContainer)`
  padding: ${(props) => props.theme.padding};
  margin: ${(props) => props.theme.margin};
`;

// (function (i, s, o, g, r, a, m) {
//       i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
//         (i[r].q = i[r].q || []).push(arguments)
//       }, i[r].l = 1 * new Date(); a = s.createElement(o),
//         m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
//     })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

//     ga('create', 'UA-88774386-1', 'auto');
//     ga('send', 'pageview');

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedin: false,
    };
  }

  getCookieValue = (key) => {
    if (!(document.cookie)) {
      return undefined;
    }
    return document.cookie.split(';')
      .filter((i) => i.includes(`${key.trim()}=`))
      .map((i) => i.split('=')[1])
      .pop();
  }

  setCookie = (key, value, exdays) => {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    const expires = `expires=${d.toUTCString()}`;
    document.cookie = `${key}=${value};${expires};path=/`;
  }

  componentDidMount() {
    const cookie = this.getCookieValue('agreedToTerms');
    if (!(cookie) || cookie == 'false') {

    } else {
      this.login();
    }
  }

  componentWillUnmount() {

  }

  login = (event) => {
    //       ga('send', {
    //         hitType: 'event',
    //         eventCategory: 'click',
    //         eventAction: 'agreedToTerms',
    //         eventLabel: 'Main'
    //       });
    this.setCookie('agreedToTerms', 'true', 365);
    this.setState({
      loggedin: true,
    });
  }

  logout = () => {
    this.setState({
      loggedin: false,
    });
  };

  render() {
    const { children, location } = this.props;
    const url = location.pathname;
    const isHome = isHomePage(url);
    const { langs, defaultLangKey } = this.props.data.site.siteMetadata.languages;
    const { social } = this.props.data.site.siteMetadata;
    const langKey = getCurrentLangKey(langs, defaultLangKey, url);
    const homeLink = `/${langKey !== 'en' ? langKey : ''}`;
    const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, url)).map((item) => ({ ...item, link: item.link.replace(`/${defaultLangKey}/`, '/') }));
    const {
      menu, author, sourceCodeLink, siteUrl, description, keywords,
    } = this.props.data.site.siteMetadata;

    const Content = this.state.loggedin
      ? (
        <div>
          <Header
            isHome={isHome}
            homeLink={homeLink}
            url={url}
            menu={menu}
            pageHasHero={this.props.hero !== undefined}
            social={social}
          />
          {this.props.hero}
          <Container>
            <main>
              {children}
            </main>
          </Container>
          <Footer
            author={author}
            langs={langsMenu}
            sourceCodeLink={sourceCodeLink}
          />
        </div>
      )
      : (
        <div>
          <div className="modal-content">
            <div className="modal-header">
              <h4>Are you of legal drining age?</h4>
            </div>
            <div className="modal-body">
              <p>Please confirm that you of legal drinking age in your country.</p>
              <br />
              <h4>Cookie policy</h4>
              <p>
We use cookies to enhance your experience of this site, please acknowledge the Terms & Conditions described on
                this page.
              </p>

              <button onClick={this.login}>Enter</button>
              <a href="https://www.google.com" target="_self">Leave</a>
            </div>
            <div className="modal-footer">
              <img src={withPrefix('/img/6beers.svg')} alt="6beers" />
              <h5>6 beers brewing co.</h5>
            </div>
          </div>
        </div>
      );

    return (
      <ThemeProvider theme={theme}>
        <IntlProvider
          locale={langKey}
          messages={messages[langKey]}
        >
          <BodyContainer>
            <FormattedMessage id="title">
              {(txt) => (
                <Helmet
                  defaultTitle={txt}
                  titleTemplate={`%s | ${txt}`}
                >
                  <meta name="author" content={author.name} />
                  <meta name="description" content={description} />
                  <meta property="og:title" content={txt} />
                  <meta property="og:description" content={description} />
                  <meta property="og:type" content="website" />
                  <meta property="og:url" content={url} />
                  <meta property="og:image" content={`${siteUrl}${withPrefix('/avatar.jpg')}`} />
                  <meta property="keywords" content={keywords} />
                  <meta name="twitter:card" content="summary_large_image" />
                  <meta name="twitter:title" content={txt} />
                  <meta name="twitter:description" content={description} />
                  <meta name="twitter:site" content={`@${author.twitter}`} />
                  <meta name="twitter:author" content={`@${author.twitter}`} />
                  <meta name="twitter:image" content={`${siteUrl}${withPrefix('/avatar.jpg')}`} />
                </Helmet>
              )}
            </FormattedMessage>
            {Content}
            <GlobalStyle />
          </BodyContainer>
        </IntlProvider>
      </ThemeProvider>
    );
  }
}

const GlobalStyle = createGlobalStyle`
  a {
    color: ${(props) => props.theme.a.color};
    text-decoration: ${(props) => props.theme.a.textDecoration};
    transition: all 0.2s;
    :hover {
      transition: all 0.2s;
      color: ${(props) => props.theme.a.hover.color};
    }
  }
  b, strong {
    font-weight: bold;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: ${(props) => props.theme.fonts.SansSerif};
  }
  h1{
    margin:${(props) => props.theme.h1.margin};
    padding:${(props) => props.theme.h1.padding};
    font-size:${(props) => props.theme.h1.fontSize};
    line-height: 1.4;
  }
  h2{
    margin:${(props) => props.theme.h2.margin};
    padding:${(props) => props.theme.h2.padding};
    font-size:${(props) => props.theme.h2.fontSize};
    line-height: 1.4;
  }
  h3{
    margin:${(props) => props.theme.h3.margin};
    padding:${(props) => props.theme.h3.padding};
    font-size:${(props) => props.theme.h3.fontSize};
    line-height: 1.4;
  }
  h4{
    margin:${(props) => props.theme.h4.margin};
    padding:${(props) => props.theme.h4.padding};
    font-size:${(props) => props.theme.h4.fontSize};
    line-height: 1.4;
  }
  h5{
    margin:${(props) => props.theme.h5.margin};
    padding:${(props) => props.theme.h5.padding};
    font-size:${(props) => props.theme.h5.fontSize};
    line-height: 1.4;
  }
  h6{
    margin:${(props) => props.theme.h6.margin};
    padding:${(props) => props.theme.h6.padding};
    font-size:${(props) => props.theme.h6.fontSize};
    line-height: 1.4;
  }
  figcaption {
    font-family: ${(props) => props.theme.fonts.System};
    margin-top: 10px;
    text-align: center;
    font-size: 14px;
  }
  sup {
    font-size: 75%;
    vertical-align: super;
  }
  .footnotes {
    ol, p {
      font-size: 14px !important;
    }
    p {
      padding-top: 0px !important;
    }
    .footnote-backref {
      display: none;
    }
  }
  .giphy-embed {
    margin-top: 2rem;
  }
`;

const BodyContainer = styled.div`
  font-family: ${(props) => props.theme.fonts.Serif};
  color: ${(props) => props.theme.color};
  background-color: ${(props) => props.theme.bg};
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  min-height: 100%;
  overflow-x: hidden;
  font-feature-settings: "calt" 1, "clig" 1, "dlig" 1, "kern" 1, "liga" 1, "salt" 1;
`;

export default (props) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            siteUrl
            description
            social {
              facebook
              instagram
              untappd
            }
            languages {
              defaultLangKey
              langs
            }
            author {
              name
              bio
              homeCity
              email
              defaultLink
              twitter
            }
            sourceCodeLink
            menu {
              label
              slug
            }
          }
        }
      }
    `}
    render={(data) => <Layout data={data} {...props} />}
  />
);

Layout.propTypes = {
  children: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};
