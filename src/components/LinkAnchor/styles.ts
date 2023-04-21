import styled, { css } from "styled-components";

interface ILinkAnchorContainerStyledProps {
  isActive: boolean;
  variant: "green" | "red";
}

export const LinkAnchorContainer = styled.a<ILinkAnchorContainerStyledProps>`
  ${({ theme: { COLORS, FONT_SIZES }, variant, isActive }) => css`
    ${variant === "green"
      ? css`
          color: ${isActive ? COLORS.GREEN_500 : COLORS.GRAY_500};
        `
      : css`
          font-weight: ${isActive ? 700 : 400};
        `}
    font-size: ${FONT_SIZES.M}rem;
    font-weight: 700;
    transition: 0.4s;
    text-decoration: none;

    &:hover {
      opacity: 0.5;
    }

    @media (max-width: 520px) {
      font-size: ${FONT_SIZES.SM}rem;
    }
  `}
`;
