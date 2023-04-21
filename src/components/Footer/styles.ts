import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const NavContainer = styled.nav`
  display: flex;
  gap: 2.5rem;

  @media (max-width: 575px) {
    gap: 1rem;
  }
`;
