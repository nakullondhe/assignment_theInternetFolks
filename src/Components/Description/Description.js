import React from 'react';
import styled from "styled-components";
import Cards from './Cards';
import CardTitle from './CardTitle';
import Results from './Results';

const Container = styled.div`
  width: 100%;
  height: auto;
  padding-top: 80px;
  padding-bottom: 100px;
  background-color: ${props =>  props.theme.Lighter_Gray};
`;




const Description = () => {
  return ( 
    <Container>
      <Results  />
      <Results  />
      <Results  />
      <CardTitle />
      <Cards />
    </Container>
   );
}
 
export default Description;