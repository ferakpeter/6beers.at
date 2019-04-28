import { Link } from 'gatsby';
import styled from 'styled-components';

const Button = styled(Link)`
  background-color: ${props => props.theme.a.color};
  border-radius: ${props => props.theme.borderRadius};
  border: 1px solid ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.buttonShadow};
  color: ${props => props.theme.colors.white};
  display: block;
  font-size: ${props => props.theme.menu.mobile.a.fontSize};
  letter-spacing: ${props => props.theme.letterSpacing};
  margin-top: 2rem;
  padding: 1rem;
  text-decoration: none;
  text-transform: ${props => props.theme.brandTextTransform};
  transition: background-color ${props => props.theme.transitionSpeed}, border-color ${props => props.theme.transitionSpeed};

  &::after {
    color: ${props => props.theme.a.color};
    content: attr(data-text);
    left: 0;
    opacity: 1;
    position: absolute;
    text-align: center;
    top: .67rem;
    transform: translateY(25%);
    transition: transform ${props => props.theme.transitionSpeed}, opacity ${props => props.theme.transitionSpeed};
    width: 100%;
  }

  &::before {
    color: ${props => props.theme.colors.blue};
    content: attr(data-text);
    opacity: 0;
    position: absolute;
    transform: translateY(1rem);
    transition: transform ${props => props.theme.transitionSpeed}, opacity ${props => props.theme.transitionSpeed};
  }

  &:hover {
    background-color: transparent;
    border-color: ${props => props.theme.a.color};

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
    border-color: ${props => props.theme.a.color};
    box-shadow: none;

    &::after {
      color: ${props => props.theme.a.color};
    }

    &::before {
      color: ${props => props.theme.a.color};
    }
  }
`;

export default Button;
