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
    box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 4px;
    transition: 0.4s;

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

    &:hover {
      opacity: 0.75;
    }
  `}
`;
