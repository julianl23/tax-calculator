import styled from "styled-components";

import Button from "./Button";

export const ResultsSection = styled.section`
  padding: 0 20px 60px 20px;

  @media screen and (min-width: 768px) {
    width: 688px;
    margin: 0 auto;
  }

  @media screen and (min-width: 1200px) {
    display: grid;
    grid-template-columns: 66% 33%;
    width: 1080px;
  }
`;

export const ResultsHeading = styled.h2`
  text-align: center;
  font-family: "Alata", sans-serif;
  font-size: 30px;
  margin: 0 0 24px;
`;

export const ResultItem = styled.p`
  text-align: center;
  font-size: 24px;
  font-weight: 500;
  margin: 0 0 12px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const TaxRateAside = styled.aside`
  margin: 20px 0 40px;
  border: 1px solid #ddd;
  background: #efefef;
  padding: 0 20px;

  @media (min-width: 1200px) {
    margin-top: 0;
  }
`;

export const AsideHeading = styled.h3`
  font-family: "Alata", sans-serif;
  font-size: 18px;
`;

export const BackButton = styled(Button)`
  @media (min-width: 1200px) {
    grid-column: 1 / span 2;
  }
`;

export const TaxResults = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1200px) {
    padding-top: 60px;
  }
`;

export const AsideList = styled.ul`
  line-height: 1.5;
`;
