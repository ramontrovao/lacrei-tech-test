import styled from "styled-components";

export const WrapperContainer = styled.main`
  padding: 4rem 4rem 0 4rem;

  display: flex;
  justify-content: space-between;

  @media (max-width: 1024px) {
    padding: 2rem 1rem 0 1rem;

    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const LeftWrapperContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 1024px) {
    align-items: center;
  }
`;

export const RightWrapperContainer = styled.div`
  img {
    width: 100%;
  }
`;
