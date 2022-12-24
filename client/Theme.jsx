import styled, { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    lightOrange: '#eea849',
    darkOrange: '#f46b45',
    gray: '#36373b',
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export const BtnMeni = styled.button`
  background-color: ${({ theme }) => theme.colors.gray};
  color: #fff;
  border: 0;
  outline: 0;
  border-radius: 2rem;
  padding: 1rem 3rem;
  text-transform: uppercase;
  cursor: pointer;
  font-weight: 500;
  transition: all ease 0.3s;

  &:hover {
    -webkit-box-shadow: 0px 0px 35px -5px rgba(0, 0, 0, 0.6);
    -moz-box-shadow: 0px 0px 35px -5px rgba(0, 0, 0, 0.6);
    box-shadow: 0px 0px 35px -5px rgba(0, 0, 0, 0.6);
  }
`;

export default Theme;
