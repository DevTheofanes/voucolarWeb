import { PersonalizeLayout as Container } from '../_layout/Layout';
import { Content } from './styles';

export const PersonalizeFull = () => {
  return (
    <Container buttonContent="EU QUERO!" to="/">
      <Content>
        <h2>Olha como sua capinha ficou:</h2>

        <img src="https://voucolar.com.br/wp-content/uploads/2020/03/Iphone-XR-Anti-Impacto-Black-Flowers-Gold-02-com-fundo-85-768x1365.jpg" alt="capinha"/>
      </Content>
    </Container>
  );
}

