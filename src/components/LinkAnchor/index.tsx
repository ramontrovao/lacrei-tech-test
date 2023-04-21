import { AnchorHTMLAttributes } from "react";
import { LinkAnchorContainer } from "./styles";

interface ILinkAnchorProps extends AnchorHTMLAttributes<HTMLElement> {
  text: string;
  variant: "green" | "red";
  isActive: boolean;
}

export const LinkAnchor = ({
  text,
  isActive = false,
  variant = "green",
  ...rest
}: ILinkAnchorProps) => {
  return (
    <LinkAnchorContainer isActive={isActive} variant={variant} {...rest}>
      {text}
    </LinkAnchorContainer>
  );
};
