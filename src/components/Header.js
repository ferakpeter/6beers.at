import React from 'react';
import PropTypes from 'prop-types';
import Menu from './Menu';
import styled from 'styled-components';
import { Grid, Cell } from 'styled-css-grid';
import FixedContainer from './FixedContainer';
import { media, visible } from '../constants/responsive';
import Link from './Link';
import throttle from 'lodash.throttle';
import { injectIntl } from 'react-intl';
import { intlRoute } from '../interpolations';

const Wrapper = styled.header`
  background: ${props => props.transparentHeader ? 'transparent' : props.theme.header.bg};
  box-shadow: 0 4px 12px 0 rgba(0,0,0,.05) !important;
  transition: background-color .5s, top 0.4s ease-in-out;
  height: 64px;
  top: ${props => props.hidden ? '-64px' : 0};
  box-sizing: border-box;
  position: fixed;
  width: 100%;
  z-index: 9;
`;

const Logo = styled.img`
  width: 3rem;
  height: 3rem;
  vertical-align: middle;
  margin: 0 6px;
  position: relative;
  float: left;
`;

const delta = 5;
const navbarHeight = 64;

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      didScroll: true,
      lastScrollTop: 0,
      hidden: false
    };
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  };

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  };

  hideHeader = () => {
    this.setState({
      hidden: true
    });
  };

  showHeader = () => {
    this.setState({
      hidden: false
    });
  };

  hasScrolled = throttle(() => {
    const st = window.scrollY;
    if (Math.abs(this.state.lastScrollTop - st) <= delta) { return; }
    if (st > this.state.lastScrollTop && st > navbarHeight) {
      this.hideHeader();
    } else {
      if(st < this.getDocHeight()) {
        this.showHeader();
      }
    }
    this.setState({
      lastScrollTop: st
    });
  }, 250);

  getDocHeight = () => {
    return Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    );
  };

  handleScroll = () => {
    this.setState({
      didScroll: true
    });
    this.hasScrolled();
  };

  render() {
    const { menu, url, intl } = this.props;
    const route = intlRoute(intl, '');
    return (
      <Wrapper transparentHeader={this.props.pageHasHero && this.state.lastScrollTop == 0} hidden={this.state.hidden}>
        <FixedContainer>
          <Grid columns={4}>
            <Cell middle>
              <Link to={route}>
                <Logo src='/img/6beers-inverse.svg' />
              </Link>
            </Cell>
            <Cell width={3}>
              <Menu menu={menu} url={url} />
            </Cell>
          </Grid>
        </FixedContainer>
      </Wrapper>
    );
  }
};

Header.propTypes = {
  menu: PropTypes.array.isRequired,
  url: PropTypes.string,
  intl: PropTypes.object.isRequired
};

export default injectIntl(Header);
