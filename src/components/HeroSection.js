import React from 'react';
import styled from 'styled-components';
import heroImage from '../assets/img/background.jpg';

const HeroSectionContainer = styled.section`
  position: relative;
  height: 80vh;
  background: url(${heroImage}) no-repeat center center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.accent};
  overflow: hidden;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
`;

const HeroTitle = styled.h1`
  margin: 0;
  font-size: 3em;
  font-weight: bold;
`;

const HeroSubtitle = styled.p`
  font-size: 1.5em;
  margin-top: 10px;
`;

const HeroSection = () => (
  <HeroSectionContainer>
    <Overlay />
    <HeroContent>
      <HeroTitle>Bem-vindo à Fabrika Tech</HeroTitle>
      <HeroSubtitle>Transformando seu negócio com soluções tecnológicas</HeroSubtitle>
    </HeroContent>
  </HeroSectionContainer>
);

export default HeroSection;
