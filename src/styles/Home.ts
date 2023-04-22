import styled from "styled-components";

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4.15rem;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 1rem;
  }
`;
