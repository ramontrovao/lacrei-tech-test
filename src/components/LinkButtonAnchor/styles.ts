import styled, { css } from "styled-components";

interface ILinkButtonAnchorContainerStylesProps {
  variant: "fill" | "outline";
}

export const LinkButtonAnchorContainer = styled.a<ILinkButtonAnchorContainerStylesProps>`
  ${({ theme: { COLORS, FONT_SIZES }, variant }) => css`
    padding: 0.75rem 2.5rem;
    min-width: 12rem;

    font-size: ${FONT_SIZES.M};
    font-weight: 700;
    border-radius: 8px;
    text-align: center;
    text-decoration: none;

    ${variant === "fill" &&
    css`
      background: ${COLORS.GREEN_500};
      color: ${COLORS.WHITE};
    `}

    ${variant === "outline" &&
    css`
      background: transparent;
      color: ${COLORS.GREEN_500};
      border: 2px solid ${COLORS.GREEN_500};
    `}
  `}
`;
