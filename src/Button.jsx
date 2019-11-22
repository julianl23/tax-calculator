import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

export const StyledButton = styled.button`
  height: 40px;
  background: #f7fafe;
  font-family: "Alata", sans-serif;
  font-size: 20px;
  border: 1px solid #bababa;
  box-shadow: -2px 2px 3px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.5s;
  width: 100%;

  &:hover {
    background: #d1d1d1;
  }
`;

const Button = ({ children, ...rest }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <StyledButton {...rest}>{children}</StyledButton>
);

Button.propTypes = {
  children: PropTypes.any,
};

Button.defaultProps = {
  children: null,
};

export default Button;
