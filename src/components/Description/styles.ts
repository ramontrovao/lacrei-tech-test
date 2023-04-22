import styled, { css } from "styled-components";

interface IDescriptionContainerContainerStyleProps {
  hasBar: boolean;
}

export const DescriptionContainer = styled.h1<IDescriptionContainerContainerStyleProps>`
  ${({ theme: { COLORS, FONT_SIZES }, hasBar }) => css`
    color: ${COLORS.GRAY_300};
    font-size: ${FONT_SIZES.XM}rem;
    font-weight: 400;
    ${hasBar &&
    css`
      border-left: 5px solid ${COLORS.GREEN_500};
      padding-left: 1rem;
    `};

    @media (max-width: 425px) {
      font-size: ${FONT_SIZES.M}rem;
    }
  `}
`;
