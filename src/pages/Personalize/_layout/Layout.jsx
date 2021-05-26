import React from 'react';
import { BiUser, BiCart } from "react-icons/bi";

import Logo from '../../../assets/voucolar.png'
import { NewHeader } from '../../../components/NewHeader';
import { Container, Header, Content, ButtonNext, ButtonNextLink } from './styles'

export const PersonalizeLayout = props => {
  const { buttonContent, to, functionTo, children } = props;
  return (
    <Container>
      <NewHeader title="Personalize Rápido" border={true}/>

      <Content>
        {children}

        {
          functionTo ? (
            <ButtonNext>
              <button onClick={() => functionTo()}> {buttonContent}</button>
            </ButtonNext>
          ): (
            <ButtonNextLink to={to}>
              <button> {buttonContent}</button>
            </ButtonNextLink>
          )
        }
        
      </Content>
    </Container>
  );
}

