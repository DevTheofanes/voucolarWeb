import { MdMail } from "react-icons/md";
import { Button, Container, TextLink } from "./styles";

export function TopBar() {
  return (
    <Container>
      <TextLink to="/infos/who">Quem nos somos</TextLink>

      <Button>
        <MdMail color="#fff" size="1.125rem"/>
        <span>Receber novidades</span>
      </Button>
    </Container>
  );
}
      
      