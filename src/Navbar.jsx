import React from "react";
import styled from "styled-components";

const NavStyled = styled.nav`
  background: linear-gradient(
    to bottom,
    rgba(246, 248, 249, 1) 0%,
    rgba(215, 222, 227, 1) 69%,
    rgba(245, 247, 249, 1) 100%
  );
  height: 50px;
  margin-bottom: 20px;
  border-bottom: 1px solid #363636;
`;

const StyledHeading = styled.h1`
  font-family: "Alata", sans-serif;
  margin: 0;
  padding-left: 12px;
  line-height: 50px;
  font-size: 18px;

  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

const Navbar = () => (
  <NavStyled>
    <StyledHeading>
      <span role="img" aria-label="Canadian flag">
        🇨🇦
      </span>{" "}
      Canadian Federal Tax Calculator
    </StyledHeading>
  </NavStyled>
);

export default Navbar;
