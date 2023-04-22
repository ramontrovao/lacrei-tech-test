import styled from "styled-components";

export const HeaderContainer = styled.header`
  padding: 0.5rem 4rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: ${({ theme: { COLORS } }) => COLORS.GRAY_200};

  @media (max-width: 575px) {
    padding: 0.5rem 1rem;
  }
`;

export const NavContainer = styled.nav`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 575px) {
    gap: 1rem;

    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export const NavRightWrapper = styled.div`
  display: flex;
  gap: 2.5rem;
`;

export const LacreiLogo = styled.a`
  color: ${({ theme: { COLORS } }) => COLORS.GREEN_500};
  font-size: ${({ theme: { FONT_SIZES } }) => FONT_SIZES.L}rem;
  font-weight: 700;
  transition: 0.4s;
  text-decoration: none;

  &:hover {
    opacity: 0.5;
  }
`;
