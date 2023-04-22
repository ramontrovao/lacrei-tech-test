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
  max-width: 33.75rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 1024px) {
    align-items: center;
    gap: 1.75rem;
  }
`;

export const RightWrapperContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    max-height: 25rem;
  }
`;
