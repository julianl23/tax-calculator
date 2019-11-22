import styled from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;

  @media (min-width: 768px) {
    padding: 0;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

export const StyledLabel = styled.label`
  text-align: center;
  font-family: "Alata", sans-serif;
  font-size: 30px;
  display: block;
`;

export const StyledInput = styled.input`
  height: 60px;
  border: 1px solid #ccc;
  text-align: center;
  color: #363636;
  font-size: 22px;
  margin: 12px 0 24px;
  width: 100%;
`;
