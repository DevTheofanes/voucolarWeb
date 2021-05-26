import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useUser } from '../../hooks/useUser';
import api from '../../services/api';
import history from '../../services/history';
import { ChoiceYourPhone, Box } from './styles';
import { PersonalizeLayout as Container } from './_layout/Layout';
// import { ProgressBarHeader } from './_layout/ProgressBar';

export const Personalize = () => {
  const { token, host } = useUser()

  const [models, setModels] = useState([])
  const [modelSelect, setModelSelect] = useState("")

  async function loadData(){
    try {
      const response = await api.get("/marks")

      const marks = response.data;
      const modelsFormatted = []

      for (const key in marks) {
        if (Object.hasOwnProperty.call(marks, key)) {
          const element = marks[key];
          
          try {
            const response = await api.get(`/marks/${element.id}/models`)
            const data = response.data;
            const shape = {
              id: element.id,
              name : element.name,
              models : data,
            }

            modelsFormatted.push(shape)
          } catch (error) {
            toast.error(error.response.data.error)
          }
        }
      }

      setModels(modelsFormatted)
    } 
    catch (error) {
      toast.error(error.response.data.error)
    }
  }

  useEffect(() => {
    loadData()
  }, [token])

  function handleSelected(phone){
    if(phone === "0" || !phone){
      return setModelSelect("")
    }

    setModelSelect(phone)
  }

  function handleNext(){
    if(modelSelect === "0" || !modelSelect){
      return toast.error("Escolha um Celular")
    }

    history.push(`/personalize/background/${modelSelect}`)
  }

  return (
    <Container buttonContent="Seguinte" to="/personalize/background" functionTo={() => handleNext()}>
      {/* <ProgressBarHeader /> */}

      <Box>
        <ChoiceYourPhone>
          <h1>ESCOLHA O SEU CELULAR: </h1>
          <div>
            {
              models.map(model => (
                <select key={model.id} onChange={e => handleSelected(e.target.value)}>
                  <option value="0">{model.name}</option>
                  {
                    model.models.map(phone => (
                    <option key={phone.id} value={phone.image}>{phone.name}</option>
                    ))
                  }
                </select>
              ))
            }
          </div>
        </ChoiceYourPhone>

        <div>
          {
            modelSelect ? (
              <img src={`${host}/files/${modelSelect}`} alt="Modelo de celular" />
            ):(
              <img src="https://voucolar.com.br/wp-content/uploads/2019/11/Fundo-IPHONE-X-2.jpg" alt="Phone"/>
            )
          }
        </div>
      </Box>
    </Container>
  );
}

