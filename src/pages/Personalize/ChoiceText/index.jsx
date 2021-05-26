import { PersonalizeContent, Preview, ChoiceOptions } from '../_layout/styles';
import { PersonalizeLayout as Container } from '../_layout/Layout';
import { ProgressBarHeader } from '../_layout/ProgressBar';

export const PersonalizeText = () => {
  return (
    <Container buttonContent="Seguinte" to="/personalize/full">
      <ProgressBarHeader active="text"/>

      <PersonalizeContent>
        <Preview>
          <img src="https://voucolar.com.br/wp-content/uploads/2019/11/Fundo-IPHONE-X-2.jpg" alt="Phone"/>
        </Preview>

        <ChoiceOptions>
          <h2>Adicione Texto</h2>

          <form className="formText">
            <input type="text" placeholder="Escreva seu texto aqui"/>

            <select onChange={e => {}}>
              <option value="0">Escolha a Fonte</option>
            </select>
          </form>
        </ChoiceOptions>
      </PersonalizeContent>
    </Container>
  );
}

