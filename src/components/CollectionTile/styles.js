import styled from 'styled-components';
import { StyledLink } from '../StyledLink';

export const CollectionTileWrapper = styled.div`
  height: 400px;
  box-shadow: 0 0 15px rgba(0,0,0,0.2);
  margin: 15px;
  max-height: 100vh;
  display: flex;
  position: relative;
  opacity: 1;
  > div {
    flex-grow: 1;
    
  }
  :hover {
    opacity: 0.5;
    transition: all 0.5s ease;
  }
`;

export const CollectionTileContent = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 25%;
  height: 100%;
  color: white;
  text-decoration: none;
  background: rgba(0, 0, 0, 0.5);
  text-align: center;
  > div {
    padding: 20px;
    ${StyledLink} {
      padding: 10px;
      background: white;
      border: 1px solid black;
      font-weight: bold;
      font-size: 16px;
  
      display: inline-block;
      color: black;
      text-decoration: none;
      cursor: pointer;
      &:hover {
        color: white;
        background: black;
      }
    }
  }
`;

export const Title = styled.div`
  padding: 5px 10px;

  display: inline-block;
  letter-spacing: 3px;
  font-family: monotype-modern-display, sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 20px;
  font-weight: bold;
  border-radius: 10px;
  background: ${props => (props.sale ? 'red' : 'none')};
`;

export const Description = styled.div`
  font-size: 20px;
  margin: 10px;
  border-radius: 10px;
  background: ${props => (props.sale ? 'red' : 'none')};
  padding: 10px;
`;