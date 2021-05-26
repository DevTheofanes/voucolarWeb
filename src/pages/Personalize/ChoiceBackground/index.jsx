import { useEffect, useState } from 'react';

import { PersonalizeContent, Preview, ChoiceOptions, Option } from '../_layout/styles';
import { PersonalizeLayout as Container } from '../_layout/Layout';
import { ProgressBarHeader } from '../_layout/ProgressBar';

import api from '../../../services/api'

import {useUser} from "../../../hooks/useUser"
import history from '../../../services/history';

export const PersonalizeBackground = (props) => {
  const phone = props.match.params.phone;
  
  const { host, token } = useUser()
  const [backgrounds, setBackgrounds] = useState([])
  const [backgroundSelected, setBackgroundSelected] = useState("ok")

  async function loadBackgrounds(){
    const response = await api.get(`/assets`)

    setBackgrounds(response.data)
  }

  useEffect(() => {
    // api.defaults.headers.authorization = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibWFuYWdlciI6dHJ1ZSwiaWF0IjoxNjE3Mzg2OTcwLCJleHAiOjE2MTc5OTE3NzB9.7mgIVGLdY16EYXFEu6rrx1-ciBEFjmxBvqAUTJlWThs`;
    
    loadBackgrounds();
  }, [token])

  function handleOption(image){
    setBackgroundSelected(image)
  }

  return (
    <Container buttonContent="Seguinte" to={`/personalize/image/${phone}/${backgroundSelected}`}>
      <ProgressBarHeader active="background"/>

      <PersonalizeContent>
        <Preview>
          {
            backgroundSelected ? (
              <>
                <img src={`${host}/files/${backgroundSelected}`} alt=""/> 
                <img src={`${host}/files/${phone}`} alt="Modelo de celular" />
              </>
            ) : (
              <img src={`${host}/files/${phone}`} alt="Modelo de celular" />
            )
          }
        </Preview>

        <ChoiceOptions>
          <h2>Fundos</h2>

          <div>
            {
              backgrounds.map( background =>{
                return(
                  <Option key={background.id} onClick={() => handleOption(background.image)}>
                    <img src={`${host}/files/${background.image}`} alt="Phone"/>
                  </Option>
                )
              })
            }
          </div>
        </ChoiceOptions>
      </PersonalizeContent>
    </Container>
  );
}

