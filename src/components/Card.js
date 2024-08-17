import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  max-width: 300px;
  text-align: center;
`;

const CardTitle = styled.h3`
  margin: 0;
  font-size: 1.5em;
  color: #333;
`;

const CardDescription = styled.p`
  font-size: 1em;
  color: #555;
`;

const Card = ({ title, description }) => (
  <CardContainer>
    <CardTitle>{title}</CardTitle>
    <CardDescription>{description}</CardDescription>
  </CardContainer>
);

export default Card;
