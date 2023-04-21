import { HeaderContainer, Link, NavContainer, Title } from "./styles";

export const Header = () => {
  return (
    <HeaderContainer>
      <Title>Lacrei</Title>

      <NavContainer>
        <Link href="">Home</Link>

        <Link href="">Pessoa usuária</Link>

        <Link href="">Profissional</Link>
      </NavContainer>
    </HeaderContainer>
  );
};
