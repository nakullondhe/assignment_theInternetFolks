import React, { useContext, useState } from 'react';
import styled from "styled-components";
import axios from "axios";

import bg_desktop from "../Assets/bg-shorten-desktop.svg";
import bg_mobile from "../Assets/bg-shorten-mobile.svg";
import { shorten } from '../Controllers/Api';
import { LinkContext } from '../Context/Context';

const Wrapper = styled.div`
  width: 100%;
  height: auto;
`;
const FormContainer = styled.div`
  width: 70%;
  height: auto;
  margin: 0 auto;
  margin-bottom: -70px;
  padding: 40px 30px 30px 30px;
  border-radius: 8px;
  z-index: 10;

  display: flex;
  position: relative;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;

  background: url(${props => props.ImgDesktop});
  background-color: ${props => props.theme.Dark_Violet};
  background-size: cover;
  /* background-image: ${props => props.ImgDesktop}; */

  @media (max-width: 375px) {
    width: 90%;
    flex-direction: column;
    padding: 20px 10px;
  }
`;


const FormInput = styled.input.attrs(props => ({
  placeholder: "Shorten a link here...",
}))`
  width: 80%;
  padding: 1em 0em 1em 2em;
  border-radius: 8px;
  border: 3px solid transparent;
  outline:none;
  box-sizing: border-box;

  font-weight:500;
  opacity: 1;

&:focus {
  border: 3px solid ${props => props.theme.Red};
}

@media (max-width: 375px) {
  width: 100%;
  margin-bottom: 20px;
}

`;

const Button = styled.button`
  width:15%;
  padding: 1em;
  border-radius: 8px;
  border: 3px solid transparent;

  cursor: pointer;
  color: white;
  font-weight: 700;

  background-color: ${props => props.theme.Cyan};

  @media (max-width: 375px) {
    width: 100%;
  }
`;

const Info = styled.p`
  color: red;
  font-style: italic;
  font-size: 1em;
  margin-top: 0.3em;

  @media (max-width : 375px) {
    text-align: left;
  }
`;

const Form = () => {
  const [value, setvalue] = useState("");
  const [loading, setLoading] = useState(false);
  const [links , setLinks] = useContext(LinkContext);
  const [link, setLink] = useState({
    code: '',
    shortLink: '',
  })

  const GetShortLink = (value) => {
    axios.get(`/shorten?url=${value}`)
    .then(response => {
      // checkResponse();
      if(!response.ok) {
        return false;
      }
      console.log(response);
      const newLink = response.resilt;
      const array = [...links];
      array.push(newLink);
      setLinks([]);
    }).catch(err => console.log(err));
  }
  

  return ( 
    <Wrapper>
      <FormContainer ImgDesktop={bg_desktop} ImgMobile={bg_mobile}>
        <FormInput value={value} onChange={e => setvalue(e.target.value)} />
        <Button disabled={loading} onClick={() => GetShortLink(value)}>Shorten It</Button>
        <Info>Please add a link</Info>
        {/* <Info 
        >Please add a link</Info> */}
      </FormContainer>

    </Wrapper> 
   );
}
 
export default Form;