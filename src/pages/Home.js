import React from 'react';
import HeroSection from '../components/HeroSection';
import Card from '../components/Card';
import styled from 'styled-components';

const Home = () => (
  <>
    <HeroSection />
    <section>
      <h2>O que oferecemos</h2>
      <CardGrid>
        <Card title="Serviço 1" description="Descrição do serviço 1" />
        <Card title="Serviço 2" description="Descrição do serviço 2" />
        <Card title="Serviço 3" description="Descrição do serviço 3" />
      </CardGrid>
    </section>
  </>
);

const CardGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  margin: 20px 0;
`;

export default Home;
