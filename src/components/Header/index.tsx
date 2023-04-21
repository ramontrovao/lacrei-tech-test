import { HeaderContainer, NavContainer, Title } from "./styles";

import { LinkAnchor } from "../LinkAnchor";

interface IHeaderProps {
  pageActive: "Home" | "Pessoa Usuária" | "Profissional";
}

export const Header = ({ pageActive }: IHeaderProps) => {
  return (
    <HeaderContainer>
      <Title>Lacrei</Title>

      <NavContainer>
        <LinkAnchor
          variant="green"
          isActive={pageActive === "Home"}
          text="Home"
          href="#"
        />

        <LinkAnchor
          variant="green"
          isActive={pageActive === "Pessoa Usuária"}
          text="Pessoa Usuária"
          href="#"
        />

        <LinkAnchor
          variant="green"
          isActive={pageActive === "Profissional"}
          text="Profissional"
          href="#"
        />
      </NavContainer>
    </HeaderContainer>
  );
};
