import styled from "styled-components";

export const HeaderContainer = styled.header`
  padding: 0.5rem 4rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: ${({ theme: { COLORS } }) => COLORS.GRAY_200};

  @media (max-width: 575px) {
    padding: 0.5rem 1rem;

    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export const NavContainer = styled.nav`
  display: flex;
  gap: 2.5rem;

  @media (max-width: 575px) {
    gap: 1rem;
  }
`;

export const Title = styled.h1`
  color: ${({ theme: { COLORS } }) => COLORS.GREEN_500};
  font-size: ${({ theme: { FONT_SIZES } }) => FONT_SIZES.L};
`;
