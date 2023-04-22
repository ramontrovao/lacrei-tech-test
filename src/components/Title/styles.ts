import styled, { css } from "styled-components";

export const TitleContainer = styled.h1`
  ${({ theme: { COLORS, FONT_SIZES } }) => css`
    color: ${COLORS.GRAY_500};
    font-size: ${FONT_SIZES.L};
    font-weight: 700;
    line-height: 4rem;
  `}
`;
