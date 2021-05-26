import { PersonalizeContent, Preview, ChoiceOptions } from '../_layout/styles';
import { PersonalizeLayout as Container } from '../_layout/Layout';
import { ProgressBarHeader } from '../_layout/ProgressBar';
import { ImFolderUpload } from "react-icons/im";
import { useUser } from '../../../hooks/useUser';


export const PersonalizeImage = (props) => {
  const phone = props.match.params.phone;
  const fundo = props.match.params.fundo;

  const {host} = useUser()
  
  return (
    <Container buttonContent="Seguinte" to={`/personalize/stickers/${phone}/${fundo}`}>
      <ProgressBarHeader active="image"/>

      <PersonalizeContent>
        <Preview>
          <img src={`${host}/files/${fundo}`} alt=""/> 
          <img src={`${host}/files/${phone}`} alt="Modelo de celular" />
        </Preview>

        <ChoiceOptions>
          <h2>Adicione sua foto</h2>

          <form>
            <div>
              <label htmlFor="arquivo">DO COMPUTADOR</label>
              <input type="file" name="arquivo" id="arquivo"/>
              <ImFolderUpload size={92} color="#707070" htmlFor="arquivo"/>
            </div>
          </form>
        </ChoiceOptions>
      </PersonalizeContent>
    </Container>
  );
}

