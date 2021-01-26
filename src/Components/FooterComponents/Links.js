import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-grow: 2;
  height: 300px;

  @media (max-height: 375px) {
    width: 100%;
    flex-direction: column;
    flex-wrap: wrap;
  }
`;

const Section = styled.div`
  width: 100%;
  text-align: left;
`;

const Title = styled.h5`
  color: white;
  font-size: 1em;
`;

const LinkItem = styled.li`
  cursor: pointer;
  list-style-type: none;
  color: white;
  font-size: 0.8em;
  margin: 10px 0px;

  &:hover {
    color: ${props => props.theme.Cyan};
  }
`;

const Links = () => {
  return ( 
    <Wrapper>
      <Section>
        <Title>Features</Title>
        <LinkItem>Link Shortening</LinkItem>
        <LinkItem>Branded Links</LinkItem>
        <LinkItem>Analytics</LinkItem>
      </Section>
      <Section>
        <Title>Resources</Title>
        <LinkItem>Blog</LinkItem>
        <LinkItem>Developers</LinkItem>
        <LinkItem>Support</LinkItem>
      </Section>
      <Section>
        <Title>Company</Title>
        <LinkItem>About</LinkItem>
        <LinkItem>Our Team</LinkItem>
        <LinkItem>Careers</LinkItem>
        <LinkItem>Contact</LinkItem>
      </Section>
    </Wrapper>
   );
}
 

export default Links;