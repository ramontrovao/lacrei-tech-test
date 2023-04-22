import styled from "styled-components";

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 4.15rem;

  @media (max-width: 1024px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
  }
`;
