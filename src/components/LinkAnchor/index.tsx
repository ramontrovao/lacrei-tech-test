import { AnchorHTMLAttributes } from "react";

import * as S from "./styles";

interface ILinkAnchorProps extends AnchorHTMLAttributes<HTMLElement> {
  text: string;
  variant?: "green" | "gray";
  isActive?: boolean;
}

export const LinkAnchor = ({
  text,
  isActive = false,
  variant = "green",
  ...rest
}: ILinkAnchorProps) => {
  return (
    <S.LinkAnchorContainer isActive={isActive} variant={variant} {...rest}>
      {text}
    </S.LinkAnchorContainer>
  );
};
