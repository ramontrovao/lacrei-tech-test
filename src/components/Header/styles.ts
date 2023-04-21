import styled, { css } from "styled-components";

export const HeaderContainer = styled.header`
  padding: 0.5rem 4rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: ${({ theme: { COLORS } }) => COLORS.GRAY_200};
`;

export const NavContainer = styled.nav`
  display: flex;
  gap: 2.5rem;
`;

export const Title = styled.h1`
  color: ${({ theme: { COLORS } }) => COLORS.GREEN_500};
  font-size: ${({ theme: { FONT_SIZES } }) => FONT_SIZES.L};
`;

export const Link = styled.a`
  ${({ theme: { COLORS, FONT_SIZES } }) => css`
    color: ${COLORS.GRAY_500};
    font-size: ${FONT_SIZES.M}rem;
    font-weight: 700;
    transition: 0.4s;
    text-decoration: none;

    &:hover {
      color: ${COLORS.GREEN_500};
    }
  `}
`;
