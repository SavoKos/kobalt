import styled, { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    lightYellow: '#fcd844',
    darkYellow: '#f4a33a',
    gray: '#36373b',
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export const Tag = styled.h6`
  color: ${({ theme }) => theme.colors.orange};
  font-size: 18px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;

export default Theme;
