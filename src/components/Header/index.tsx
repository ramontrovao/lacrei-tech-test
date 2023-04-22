import * as S from "./styles";

import { LinkAnchor } from "../LinkAnchor";

interface IHeaderProps {
  pageActive: string;
}

export const Header = ({ pageActive }: IHeaderProps) => {
  return (
    <S.HeaderContainer>
      <S.NavContainer>
        <S.LacreiLogo href="/">Lacrei</S.LacreiLogo>

        <S.NavRightWrapper>
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
        </S.NavRightWrapper>
      </S.NavContainer>
    </S.HeaderContainer>
  );
};
