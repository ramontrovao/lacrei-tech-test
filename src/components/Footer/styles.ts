import styled, { css } from "styled-components";

export const FooterContainer = styled.footer`
  margin: 2rem 4rem 0 4rem;
  height: 10rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;

  border-top: 1px solid ${({ theme: { COLORS } }) => COLORS.GREEN_100};

  @media (max-width: 575px) {
    margin: 2rem 1rem 0 1rem;
  }
`;

export const NavContainer = styled.nav`
  display: flex;
  gap: 2.5rem;

  @media (max-width: 575px) {
    gap: 1rem;
  }
`;

export const IconLink = styled.a`
  text-decoration: none;
  transition: 0.4s;

  &:hover {
    opacity: 0.5;
  }
`;

export const SmallText = styled.p`
  ${({ theme: { COLORS, FONT_SIZES } }) => css`
    color: ${COLORS.GRAY_300};
    font-size: ${FONT_SIZES.SM}rem;
  `}
`;
