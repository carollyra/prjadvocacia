// src/components/Header/index.tsx
import { Container, Nav, Logo, NavLinkStyled } from './styles';

export default function Header() {
  return (
    <Container>
      <Logo href="/">RegistreAgora</Logo>
      <Nav>
        <NavLinkStyled to="/">Início</NavLinkStyled>
        <NavLinkStyled to="/sobre">Sobre</NavLinkStyled>
        <NavLinkStyled to="/servicos">Serviços</NavLinkStyled>
        <NavLinkStyled to="/contato">Contato</NavLinkStyled>
      </Nav>
    </Container>
  );
}
