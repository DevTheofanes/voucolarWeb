import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  padding: 0 15rem;

  @media (max-width:1480px){
    padding: 0 6rem;
  }

  @media (max-width:1380px){
    padding: 0 4.3525rem;
  }

  @media (max-width:1280px){
    padding: 0 3.65rem;
  }

  @media (max-width:1080px){
    padding: 0 2rem;
  }

  @media (max-width:880px){
    padding: 0 1.5rem;
  }
`;

export const Header = styled.div`
  margin-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #A16695;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  img{
    height: 2.5rem;
  }

  h1{
    text-align: center;
    text-transform: uppercase;
  }

  div{
    display: flex;
    justify-content: flex-end;
    align-items: center;

    svg+svg{
      margin-left: 1rem;
    }
  }
`;

export const Content = styled.div`
  padding: 0 6rem;
`;

export const ButtonNext = styled.div`
  display: flex;
  justify-content: flex-end;
  
  button{
    padding: 0.75rem 1.5rem;
    text-align: center;
    max-width: 9rem;
    background-color:#9D3DBF;
    font-size: 1.125rem;
    color: #fff;
    text-transform: uppercase;
    border-radius: 0.25rem;
    font-weight: 500;
    border: 0;
  }
`;

export const ButtonNextLink = styled(Link)`
  display: flex;
  justify-content: flex-end;
  
  button{
    padding: 0.75rem 1.5rem;
    text-align: center;
    max-width: 9rem;
    background-color:#9D3DBF;
    font-size: 1.125rem;
    color: #fff;
    text-transform: uppercase;
    border-radius: 0.25rem;
    font-weight: 500;
    border: 0;
  }
`;


export const ProgressBar = styled.div`
  display: flex;
  justify-content: center;
  margin: 1.5625rem 0;
`;

export const ProgressBarItem = styled.div`
  display: flex; 
  flex-direction: column;
  align-items: center;

  border: ${props => props.active ? 0 : "1px solid #D6D6D6"};
  background-color: ${props => props.active ? "#B88CAF" : "transparent"};
  padding: 0.625rem 0;
  width: 10.625rem;
  
  strong{
    font-size: 1.25rem;
    color: ${props => props.active ? "#fff" : "#7D7D7D"};
  }

  span{
    color: ${props => props.active ? "#fff" : "#000"};
    font-size: 0.75rem;
  }
`;

export const PersonalizeContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 0.365fr;
`;

export const Preview = styled.div`
  img{
    position: absolute;
    /* top: 0; */
    /* width: 20rem;
    height: 36.25rem; */
    width: 13.5rem;
    height: 24rem;
  }
`;

export const ChoiceOptions = styled.div`
  max-height: 22rem;
  overflow:auto;

  h2{
    font-size: 1.125rem;
    text-transform: uppercase;
    color: #707070;
    font-weight: bold;
    margin-bottom: 1.25rem;
  }
  
  div{
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr 1fr 1fr;
  }

  form {
    div{
      border: 1px solid #7D7D7D;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 10rem;
      padding: 1rem 0;
      border-radius: 0.25rem;

      label{
        font-size: 1rem;
        font-weight: 500;
        color: #7D7D7D;
      }

      input[type="file"] {
        display: none;
      }
    }
  }

  .formText{
    border: 1px solid #707070;
    height: 19rem;
    padding: 1.25rem;

    display: flex;
    flex-direction: column;

    input{
      padding: 0.25rem 0.5rem;
    }
  
    select{
      padding: 0.25rem 0.5rem;
      margin-top: 1.25rem;
      color: #707070;
    }
  }
`;

export const Option = styled.button`
  border: 0;
  background-color: transparent;

  img{
    height: 14rem;
  }

  .stickers{
    height: 10rem;
  }
`;
