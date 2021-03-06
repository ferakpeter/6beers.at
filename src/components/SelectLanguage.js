import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';
import At from './flags/At';
import Us from './flags/Us';

const Nav = styled.nav`
`;

const Ul = styled.ul`
`;

const Li = styled.li`
  display: inline-block;
  padding: ${(props) => props.theme.i18n.selectLanguage.li.padding};
  margin: ${(props) => props.theme.i18n.selectLanguage.li.margin};
  font-size: ${(props) => props.theme.i18n.selectLanguage.li.fontSize};
  cursor: pointer;
  border-radius: ${(props) => props.theme.i18n.selectLanguage.li.borderRadius};
  transition: 0.3s;
  background-color: ${(props) => (props.selected
    ? props.theme.i18n.selectLanguage.li.selected.backgroundColor
    : `transparent`)};

  &:hover{
    background-color: ${(props) => props.theme.i18n.selectLanguage.li.selected.backgroundColor};
    transition: 0.3s;
  }
`;

const getIcon = (langKey) => {
  switch (langKey) {
    case 'en': return <Us />;
    case 'de': return <At />;
    default: return null;
  }
};

const SelectLanguage = (props) => {
  const links = props.langs.map((lang) => (
    <Link key={lang.langKey} to={lang.link}>
      <Li selected={lang.selected}>
        {getIcon(lang.langKey)}
      </Li>
    </Link>
  ));

  return (
    <Nav>
      <Ul>
        {links}
      </Ul>
    </Nav>
  );
};

SelectLanguage.propTypes = {
  langs: PropTypes.array,
};

export default SelectLanguage;
