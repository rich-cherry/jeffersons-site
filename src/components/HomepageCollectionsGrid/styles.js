import styled from 'styled-components';

export const RemainingCollections = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 90%;
  margin: 0 auto;
  > div {
    flex-grow: 1;
    min-width: 100%;
    @media (min-width: 768px) {
      min-width: 50%;
    }
    @media (min-width: 1024px) {
      min-width: 33%;
    }
  }
`;