import styled from 'styled-components';

export const SectionComponent = styled.section`
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 30px;
  padding-right: 30px;
  position: relative;
  min-height: auto;
  width: 100%;
  display: flex;
  flex-flow: row;
  align-items: center;
`;

export const Content = styled.div`
  position: relative !important;
  z-index: 1;
  width: 100%;
`;

export const Row = styled.div`
  padding-left: 0;
  padding-right: 0;
  margin-left: -15px;
  margin-right: -15px;
  width: auto;
  display: flex;
  flex-flow: row wrap;
  max-width: 1080px;

  

  @media (max-width:600px){
    display: grid;
    /* justify-content: center; */
  }
`;

export const Column = styled.div`
  max-width: 25%;
  flex-basis: 25%;
  position: relative;
  margin: 0;
  padding: 0 0.9rem 1.8rem;
  width: 100%;

  @media (max-width:600px){
    max-width: 100%;
    display: flex;
    padding: 0;
    margin-bottom: 1rem;
    /* justify-content: center; */
  }
`;

export const ColInner = styled.div`
  margin-left: auto;
  margin-right: 0;
  position: relative;
  width: 100%;
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const IconBox = styled.div`
  text-align: center;
`;

export const IconBoxImg = styled.div`
  width: 60px;
  margin: 0 auto 1em;
  margin-bottom: 1em;
  max-width: 100%;
  position: relative;

  img {
    padding-top: 0.2em;
    width: 100%;
    max-width: 100%;
    height: auto;
    display: inline-block;
    vertical-align: middle;
    border-style: none;
  }
`;

export const IconBoxText = styled.div`
  margin-left: auto;
  margin-right: auto;

  h3 {
    font-family: 'Slabo 27px', sans-serif;
    font-size: 1.25em;
    color: #555;
    width: 100%;
    margin-top: 0;
    margin-bottom: 0.5em;
    text-rendering: optimizeSpeed;
  }

  p {
    margin-bottom: 0;
    margin-top: 0;
  }

  @media (max-width:600px){
    h3{
      font-size: 1rem;
    }

    p{
      font-size: 0.8rem;
      text-align: center;

      max-width: 50%;
      margin: 0 auto;
    }
  }
`;
