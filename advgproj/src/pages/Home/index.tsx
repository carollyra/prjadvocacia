import { Container, Hero, CTAButton } from './styles';

export default function Home() {
  return (
    <Container>
      <Hero>
        <h1>Registre sua marca com segurança</h1>
        <p>Proteja o nome do seu negócio com assessoria especializada.</p>
        <CTAButton href="#contato">Quero registrar agora</CTAButton>
      </Hero>
    </Container>
  );
}
