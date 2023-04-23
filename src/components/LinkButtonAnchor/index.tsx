import { AnchorHTMLAttributes, HTMLAttributes } from "react";
import { LinkButtonAnchorContainer } from "./styles";

interface ILinkButtonAnchor extends AnchorHTMLAttributes<HTMLElement> {
  text: string;
  variant?: "fill" | "outline";
}

export const LinkButtonAnchor = ({
  text,
  variant = "fill",
  ...rest
}: ILinkButtonAnchor) => {
  return (
    <LinkButtonAnchorContainer variant={variant} {...rest}>
      {text}
    </LinkButtonAnchorContainer>
  );
};
