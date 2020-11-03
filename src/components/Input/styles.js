import styled from 'styled-components';

export const Input = styled.input`
  border: none;
  box-shadow: 0 0 15px rgba(0,0,0,0.2);
  display: block;
  font-size: 16px;
  font-family: futura-pt, sans-serif;
  font-weight: 400;
  font-style: normal;
  border-radius: 0;
  padding: 5px 10px;
  height: 44px;
  box-sizing: border-box;
  min-width: 0;
  &:focus {
    border-color: black;
  }
`;