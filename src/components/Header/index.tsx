import { HeaderContainer, Link, NavContainer, Title } from "./styles";

export const Header = () => {
  return (
    <HeaderContainer>
      <Title>Lacrei</Title>

      <NavContainer>
        <Link href="">Home</Link>

        <Link href="">Pessoa Usuária</Link>

        <Link href="">Profissional</Link>
      </NavContainer>
    </HeaderContainer>
  );
};
