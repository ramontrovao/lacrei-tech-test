import {
  HeaderContainer,
  NavContainer,
  LacreiLogo,
  NavRightWrapper,
} from "./styles";

import { LinkAnchor } from "../LinkAnchor";

interface IHeaderProps {
  pageActive: string;
}

export const Header = ({ pageActive }: IHeaderProps) => {
  return (
    <HeaderContainer>
      <NavContainer>
        <LacreiLogo href="/">Lacrei</LacreiLogo>

        <NavRightWrapper>
          <LinkAnchor
            variant="green"
            isActive={pageActive === "/"}
            text="Home"
            href="/"
          />

          <LinkAnchor
            variant="green"
            isActive={pageActive === "/pessoa-usuaria"}
            text="Pessoa Usuária"
            href="/pessoa-usuaria"
          />

          <LinkAnchor
            variant="green"
            isActive={pageActive === "/profissional"}
            text="Profissional"
            href="/profissional"
          />
        </NavRightWrapper>
      </NavContainer>
    </HeaderContainer>
  );
};
