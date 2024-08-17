// src/globalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif; /* Ou qualquer outra fonte que você esteja usando */
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.colors.background}; /* Usando a cor de fundo definida no tema */
  }
`;

export default GlobalStyle;
