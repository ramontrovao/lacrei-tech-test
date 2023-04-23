import Image from "next/image";

import facebookLogo from "@assets/facebook-logo.svg";
import instagramLogo from "@assets/instagram-logo.svg";
import linkedinLogo from "@assets/linkedin-logo.svg";

import { LinkAnchor } from "@components/LinkAnchor";

import * as S from "./styles";

interface IFooterProps {
  pageActive: string;
}

export const Footer = ({ pageActive = "/" }: IFooterProps) => {
  return (
    <S.FooterContainer>
      <S.NavContainer>
        <LinkAnchor
          text="Home"
          isActive={pageActive === "/"}
          variant="gray"
          href="/"
        />
        <LinkAnchor
          text="Pessoa Usuária"
          isActive={pageActive === "/pessoa-usuaria"}
          variant="gray"
          href="/pessoa-usuaria"
        />
        <LinkAnchor
          text="Profissional"
          isActive={pageActive === "/profissional"}
          variant="gray"
          href="/profissional"
        />
      </S.NavContainer>

      <S.NavContainer>
        <S.IconLink href="/">
          <Image src={facebookLogo} alt="" />
        </S.IconLink>

        <S.IconLink href="/">
          <Image src={instagramLogo} alt="" />
        </S.IconLink>

        <S.IconLink href="/">
          <Image src={linkedinLogo} alt="" />
        </S.IconLink>
      </S.NavContainer>

      <S.SmallText>Desafio Front-end Lacrei</S.SmallText>
    </S.FooterContainer>
  );
};
