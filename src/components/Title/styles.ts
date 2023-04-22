import styled, { css } from "styled-components";

export const TitleContainer = styled.h1`
  ${({ theme: { COLORS, FONT_SIZES } }) => css`
    color: ${COLORS.GRAY_300};
    font-size: ${FONT_SIZES.XL}rem;
    font-weight: 700;
    line-height: 4rem;

    @media (max-width: 425px) {
      font-size: ${FONT_SIZES.L}rem;
      line-height: 3rem;
    }
  `}
`;
