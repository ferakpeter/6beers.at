import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { endsWith } from 'ramda';
import { injectIntl, FormattedMessage } from 'react-intl';
import { FaFacebook, FaInstagram, FaUntappd } from 'react-icons/fa';
import { visible, hidden, media } from '../constants/responsive';
import { InvisibleSpan } from './Invisible';
import A from './A';

const CloseNav = styled.section`
  ${hidden.md}
  ${(props) => (props.isOpen
    ? ` top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        position: fixed;`
    : '')};
`;

const Nav = styled.nav`
  text-align: center;
  position: fixed;
  top: 0;
  right: calc(-100%);
  width: 100%;
  box-sizing: border-box;
  height: 100%;
  z-index: 2;
  padding: ${(props) => props.theme.menu.mobile.padding};
  transition-timing-function: ease-in, step-start, cubic-bezier(0.1, 0.7, 1.0, 0.1);
  transition: ${(props) => (props.isOpen ? 'transform 1s, background-color 0.5s' : 'transform 0.5s, background-color 1s')};
  background-color: ${(props) => (props.isOpen ? props.theme.menu.mobile.opened.bg : props.theme.menu.mobile.closed.bg)};
  ${(props) => (props.isOpen ? 'transform: translateX(-60%);' : '')};
  ${media.md`
    padding: ${(props) => props.theme.menu.desktop.padding};
    display: flex;
    flex-grow: 1;
    align-items: center;
    position: relative;
    right: auto;
    left: auto;
    height: auto;
    z-index: 1030;
    transform: none;
    background-color: ${(props) => props.theme.menu.mobile.closed.bg};
  `}
`;

const MenuLabel = styled.label`
  ${hidden.md}
  width: ${(props) => props.theme.menu.mobile.label.width};
  height: ${(props) => props.theme.menu.mobile.label.height};
  position: relative;
  float: right;
  cursor: pointer;
  color: ${(props) => props.theme.colors.white};
  margin: 0.8rem 1.5rem;
  transition: color 0.4s;
  font-size: ${(props) => props.theme.menu.mobile.label.fontSize};

`;

const Checkbox = styled.input`
  ${hidden.md}
  position: absolute;
  opacity: 0.02;
  cursor: pointer;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
`;

const MenuLink = styled(Link)`
    font-size: ${(props) => props.theme.menu.mobile.a.fontSize};
    font-family: ${(props) => props.theme.menu.mobile.a.fontFamily};
    padding: ${(props) => props.theme.menu.mobile.a.padding};
    display: block;
    text-align: ${(props) => props.theme.menu.mobile.a.textAlign};
    text-decoration: none;
    text-transform: ${(props) => props.theme.brandTextTransform};
    letter-spacing: 1px;
    transition: 0.5s;
    color: ${(props) => (props.selected ? props.theme.menu.mobile.a.active.color : props.theme.menu.mobile.a.color)};
    &:hover {
      color: ${(props) => props.theme.menu.mobile.a.active.color};
      transition: 0.5s;
    }
    ${media.md`
      display: inline;
      font-size: ${(props) => props.theme.menu.desktop.a.fontSize};
      font-family: ${(props) => props.theme.menu.desktop.a.fontFamily};
      font-weight: ${(props) => props.theme.menu.desktop.a.fontWeight};
      letter-spacing: 1px;
      padding: 0 ${(props) => props.theme.menu.desktop.a.padding} ${(props) => props.theme.menu.desktop.a.padding} ${(props) => props.theme.menu.desktop.a.padding};;
      color: ${(props) => (props.selected ? props.theme.menu.desktop.a.active.color : props.theme.menu.desktop.a.color)};
      &:hover {
        color: ${(props) => props.theme.menu.desktop.a.active.color};
      }
    `}
`;

const MenuA = MenuLink.withComponent(styled.a``);

const Ul = styled.ul`
    display: block;
    margin: ${(props) => props.theme.menu.mobile.ul.margin};
    list-style: none;
    transition: opacity 1s, transform 0.5s;
    opacity: ${(props) => (props.isOpen ? 1 : 0)};
    ${media.md`
      opacity: 1;
      margin: ${(props) => props.theme.menu.desktop.ul.margin};
      li {
        display: inline-block;
      }
    `}
`;

const FixedContainer = styled.div`
  ${media.md`
    width: ${(props) => props.theme.maxWidth};
    margin: 0 auto;
    text-align: right;
  `}
`;

const Bar1 = styled.path`
  transform-origin: center center;
  transition: transform .3s ease-out, opacity .3s ease-out;
  transform: ${(props) => (props.isOpen ? 'translate(-.18rem, 0) rotate(45deg)' : '')};
`;

const Bar2 = styled.path`
  transform-origin: center center;
  transition: transform .3s ease-out, opacity .3s ease-out;
  opacity: ${(props) => (props.isOpen ? 0 : 100)};
`;

const Bar3 = styled.path`
  transform-origin: center center;
  transition: transform .3s ease-out, opacity .3s ease-out;
  transform: ${(props) => (props.isOpen ? 'translate(-.18rem, 0) rotate(-45deg)' : '')};
`;

const Svg = styled.svg`
  height: 100%;
  width: 100%;
  overflow: visible;
`;

const Burger = styled.div`
  cursor: pointer;
  height: 1.2rem;
  display: block;
  pointer-events: all;
  position: relative;
  text-align: right;
  user-select: none;
  z-index: 10;
`;

const PlaceHolder = styled.span`
  ${visible.lg}
  padding: ${(props) => props.theme.menu.desktop.a.padding};
`;

const FacebookIcon = styled(FaFacebook)`
  font-size: ${({ theme }) => theme.scale(0.3)};
  color: ${({ theme }) => theme.colors.white};
  display: inline;
  cursor: pointer;
  margin: auto;

  &:hover {
    color: ${(props) => props.theme.menu.mobile.a.active.color};
    transition: 0.5s;
  }
  ${media.md`
    &:hover {
      color: ${(props) => props.theme.menu.desktop.a.active.color};
    }
  `}
`;

const UntappdIcon = styled(FaUntappd)`
  font-size: ${({ theme }) => theme.scale(0.3)};
  color: ${({ theme }) => theme.colors.white};
  display: inline;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.menu.mobile.a.active.color};
    transition: 0.5s;
  }
  ${media.md`
    &:hover {
      color: ${(props) => props.theme.menu.desktop.a.active.color};
    }
  `}
`;

const InstagramIcon = styled(FaInstagram)`
  font-size: ${({ theme }) => theme.scale(0.3)};
  color: ${({ theme }) => theme.colors.white};
  display: inline;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.menu.mobile.a.active.color};
    transition: 0.5s;
  }
  ${media.md`
    &:hover {

      color: ${(props) => props.theme.menu.desktop.a.active.color};
    }
  `}
`;

class Menu extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  open = (event) => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  getMenuItems = (isSelected, menu, langKey) => menu.map((item) => {
    const slug = `/${langKey !== 'en' ? langKey : ''}${item.slug}`;

    const subItems = item.items
      ? (
        <ul style={{ display: 'none' }}>
          {this.getMenuItems(isSelected, item.items, langKey)}
        </ul>
      )
      : null;

    return (
      <li key={item.slug}>
        <FormattedMessage id={item.label}>
          {(label) =>
            (item.link
              ? (
                <MenuA target="_blank" href={item.link}>
                  {label}
                </MenuA>
              )
              : (
                <MenuLink selected={isSelected(slug)} to={slug} onClick={this.open}>
                  {label}
                </MenuLink>
              ))}
        </FormattedMessage>
        {subItems}
      </li>
    );
  })

  render() {
    const { isOpen } = this.state;
    const isSelected = this.props.url == '/' ? (slug) => false : endsWith(this.props.url);
    const menuItems = this.getMenuItems(isSelected, this.props.menu, this.props.intl.locale);

    return (
      <section>
        <CloseNav isOpen={isOpen} onClick={this.open} />
        <MenuLabel isOpen={isOpen} htmlFor="cb-menu">
          <Burger isOpen={isOpen}>
            <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 9">
              <Bar1 isOpen={isOpen} fill="currentColor" d="M0,0H11V1.44H0Z" />
              <Bar2 isOpen={isOpen} fill="currentColor" d="M0,3.78H11V5.22H0Z" />
              <Bar3 isOpen={isOpen} fill="currentColor" d="M0,7.56H11V9H0Z" />
            </Svg>
          </Burger>
          <InvisibleSpan>Menu</InvisibleSpan>
          <Checkbox
            type="checkbox"
            name="cb-menu"
            id="cb-menu"
            checked={this.state.isOpen}
            onChange={this.open}
          />
        </MenuLabel>

        <Nav isOpen={isOpen}>
          <FixedContainer>
            <Ul isOpen={isOpen}>
              <li key="menu.facebook">
                {' '}
                <A href={this.props.social.facebook} target="_blank">
                  {' '}
                  <FacebookIcon />
                  {' '}
                </A>
                {' '}
              </li>
              <li key="menu.placeholder1">
                {' '}
                <PlaceHolder />
                {' '}
              </li>
              <li key="menu.untappd">
                {' '}
                <A href={this.props.social.untappd} target="_blank">
                  {' '}
                  <UntappdIcon />
                  {' '}
                </A>
                {' '}
              </li>
              <li key="menu.placeholder2">
                {' '}
                <PlaceHolder />
                {' '}
              </li>
              <li key="menu.instagram">
                {' '}
                <A href={this.props.social.instagram} target="_blank">
                  {' '}
                  <InstagramIcon />
                  {' '}
                </A>
                {' '}
              </li>
              <li key="menu.placeholder3">
                {' '}
                <PlaceHolder />
                {' '}
              </li>
              <li key="menu.placeholder4">
                {' '}
                <PlaceHolder />
                {' '}
              </li>
              <li key="menu.placeholder5">
                {' '}
                <PlaceHolder />
                {' '}
              </li>
              {menuItems}
            </Ul>
          </FixedContainer>
        </Nav>
      </section>
    );
  }
}

Menu.propTypes = {
  menu: PropTypes.array.isRequired,
  url: PropTypes.string.isRequired,
  intl: PropTypes.object.isRequired,
};

export default injectIntl(Menu);
