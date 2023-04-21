import Image from "next/image";

import facebookLogo from "@assets/facebook-logo.svg";
import instagramLogo from "@assets/instagram-logo.svg";
import linkedinLogo from "@assets/linkedin-logo.svg";

import { LinkAnchor } from "@components/LinkAnchor";

import { FooterContainer, IconLink, NavContainer, SmallText } from "./styles";

interface IFooterProps {
  pageActive: "Home" | "Pessoa Usuária" | "Profissional";
}

export const Footer = ({ pageActive }: IFooterProps) => {
  return (
    <FooterContainer>
      <NavContainer>
        <LinkAnchor
          text="Home"
          isActive={pageActive === "Home"}
          variant="gray"
          href="#"
        />
        <LinkAnchor
          text="Pessoa Usuária"
          isActive={pageActive === "Pessoa Usuária"}
          variant="gray"
          href="#"
        />
        <LinkAnchor
          text="Profissional"
          isActive={pageActive === "Profissional"}
          variant="gray"
          href="#"
        />
      </NavContainer>

      <NavContainer>
        <IconLink href="#">
          <Image src={facebookLogo} alt="" />
        </IconLink>

        <IconLink href="#">
          <Image src={instagramLogo} alt="" />
        </IconLink>

        <IconLink href="#">
          <Image src={linkedinLogo} alt="" />
        </IconLink>
      </NavContainer>

      <SmallText>Desafio Front-end Lacrei</SmallText>
    </FooterContainer>
  );
};
