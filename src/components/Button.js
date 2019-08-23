import { Link } from 'gatsby';
import styled from 'styled-components';

const Button = styled(Link)`
  background-color: ${(props) => props.theme.a.color};
  border: 1px solid transparent;
  border-radius: ${(props) => props.theme.borderRadius};
  box-shadow: ${(props) => props.theme.buttonShadow};
  color: ${(props) => (props.color !== undefined ? props.color : props.theme.colors.white)};
  display: inline-block;
  font-weight: ${(props) => props.theme.cta.fontWeight};
  font-size: ${(props) => props.theme.menu.mobile.a.fontSize};
  letter-spacing: ${(props) => props.theme.letterSpacing};
  line-height: 1;
  margin: 1rem 0 0;
  padding: 1rem 2rem;
  position: relativ;
  text-decoration: none;
  text-transform: ${(props) => props.theme.brandTextTransform};
  transition: background-color ${(props) => props.theme.transitionSpeed}, border-color ${(props) => props.theme.transitionSpeed};

  &::after {
    color: ${(props) => props.theme.a.color};
    content: attr(data-text);
    left: 0;
    opacity: 1;
    position: absolute;
    text-align: center;
    top: .67rem;
    transform: translateY(25%);
    transition: transform ${(props) => props.theme.transitionSpeed}, opacity ${(props) => props.theme.transitionSpeed};
    width: 100%;
  }

  &::before {
    color: ${(props) => props.theme.colors.gold};
    content: attr(data-text);
    opacity: 0;
    position: absolute;
    transform: translateY(1rem);
    transition: transform ${(props) => props.theme.transitionSpeed}, opacity ${(props) => props.theme.transitionSpeed};
  }

  &:hover {
    background-color: transparent;
    border-color: ${(props) => props.theme.a.color};

    &::after {
      opacity: 0;
      transform: translateY(-1rem);
    }

    &::before {
      opacity: 1;
      transform: translateY(0);
    }
  }

  &:empty {
    display: none;
  }

  &:disabled {
    background-color: transparent;
    border-color: ${(props) => props.theme.a.color};
    box-shadow: none;

    &::after {
      color: ${(props) => props.theme.a.color};
    }

    &::before {
      color: ${(props) => props.theme.a.color};
    }
  }
`;

export default Button;
