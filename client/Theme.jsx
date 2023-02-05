import styled, { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    lightOrange: '#eea849',
    darkOrange: '#f46b45',
    gray: '#36373b',
    lightGray: '#eceff4',
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
  padding: 0.8rem 1.6rem;
  text-transform: uppercase;
  cursor: pointer;
  transition: all ease 0.3s;
  font-weight: 500;

  a {
    color: #fff;
  }

  &:hover {
    -webkit-box-shadow: 0px 0px 35px -5px rgba(0, 0, 0, 0.6);
    -moz-box-shadow: 0px 0px 35px -5px rgba(0, 0, 0, 0.6);
    box-shadow: 0px 0px 35px -5px rgba(0, 0, 0, 0.6);
  }

  @media screen and (min-width: 768px) {
    padding: 1rem 3rem;
  }
`;

export const TopNote = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray};
  text-align: right;
  padding: 0.5rem 2rem;

  p {
    color: #fff;
    width: 100%;
  }

  .discount {
    text-align: center;
  }
`;

export const Buttons = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  button {
    outline: 0;
    border: 0;
    background-color: ${({ theme }) => theme.colors.lightOrange}!important;
    color: #000;
    padding: 1rem 2rem;
    border-radius: 2rem !important;
    cursor: pointer;

    &.red {
      background-color: #ff3131 !important;
      color: #fff;
    }
  }
`;

export const Auth = styled.div`
  display: flex;
  background-color: #fff;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.025);
  flex-direction: column-reverse;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }

  .login-btn {
    display: block;
    width: 100%;
    margin: auto;
  }

  a {
    color: ${({ theme }) => theme.colors.blue};
    font-weight: 500;
    cursor: pointer;
    text-decoration: none;

    &.forgot-password {
      text-align: center;
      margin-top: 20px;
      display: block;
    }

    &:hover,
    &:focus {
      text-decoration: underline;
      color: #0f1396;
    }
  }

  .login-box-formbox {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1 1 100%;
    padding: 4em 2.5em;

    @media screen and (min-width: 1400px) {
      padding: 4em 6em;
    }
  }

  .login-box-signup {
    margin-bottom: 2.5em;
  }

  .login-box-login {
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    flex-grow: 1;
    max-width: 650px;

    @media screen and (min-width: 768px) {
      width: 50%;
    }

    & > * {
      width: 100%;
      flex-shrink: 0;
    }
  }

  .alternate-text {
    display: flex;
    align-items: center;
    margin: 1.5em 0;
    text-align: center;

    &::before,
    &::after {
      content: '';
      flex: 1;
      border-bottom: 1px solid #bebebe;
    }

    &::before {
      margin-right: 1em;
    }

    &::after {
      margin-left: 1em;
    }
  }

  .alternate-boxes {
    display: flex;
    justify-content: space-between;
    gap: 1em;
    margin-top: 1.5em;
  }

  .alternate-box {
    color: #131125;
    text-align: center;
    width: 100%;
    padding: 1em 1em;
    border: 1px solid rgba(#bebebe, 0.5);
    border-radius: 5px;
    cursor: pointer;
    transition: all 500ms ease;

    svg {
      transition: transform 500ms ease;
    }

    &:hover {
      border-color: #bebebe;
      background-color: rgba(#bebebe, 0.25);

      svg {
        transform: scale(1.25);
      }
    }
  }

  padding: 1em 0;
  position: relative;

  .logo {
    cursor: pointer;
    margin-bottom: 50px !important;
    min-height: 0 !important;
    position: static !important;
  }

  .quote {
    color: #fff;
    font-size: 4em;
    font-weight: 600;
    line-height: 1;
    justify-self: center;
    margin-top: 70px;

    @media screen and (min-width: 768px) {
      font-size: 5em;
    }

    @media screen and (min-width: 1400px) {
      font-size: 7em;
    }
  }

  form {
    .error-message {
      color: red;
      font-weight: 400;
    }

    .resetPassword {
      text-align: center;
      margin: auto;
      display: block;
      margin-top: 1rem;
    }

    & > div {
      position: relative;
      padding: 1.5em 0;

      input {
        color: #000;
        width: 100%;
        padding: 1.5em 2em;
        border: 1px solid #bebebe;
        border-radius: 5px;
        font-size: 16px;

        &.input-email,
        &.input-password,
        &.input-phone,
        &.input-name {
          background-size: 24px;
          background-repeat: no-repeat;
          background-position: right 1em top 1.25em;
        }

        &.input-file {
          opacity: 0;
          cursor: pointer;
          padding: 15px;
        }

        &.input-email {
          background-image: url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="lightgrey" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><circle cx="12" cy="12" r="4"></circle><path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28"></path></svg>');
        }

        &.input-password {
          background-image: url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="lightgrey" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><rect x="5" y="11" width="14" height="10" rx="2"></rect><circle cx="12" cy="16" r="1"></circle><path d="M8 11v-4a4 4 0 0 1 8 0v4"></path></svg>');
        }

        &.input-name {
          background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnIHRyYW5zZm9ybT0ibWF0cml4KDEsMCwwLDEsOC41MjY1MTI4MjkxMjEyMDJlLTE0LDUuNjg0MzQxODg2MDgwODAyZS0xNCkiPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTQzNy4wMiwzMzAuOThjLTI3Ljg4My0yNy44ODItNjEuMDcxLTQ4LjUyMy05Ny4yODEtNjEuMDE4QzM3OC41MjEsMjQzLjI1MSw0MDQsMTk4LjU0OCw0MDQsMTQ4ICAgIEM0MDQsNjYuMzkzLDMzNy42MDcsMCwyNTYsMFMxMDgsNjYuMzkzLDEwOCwxNDhjMCw1MC41NDgsMjUuNDc5LDk1LjI1MSw2NC4yNjIsMTIxLjk2MiAgICBjLTM2LjIxLDEyLjQ5NS02OS4zOTgsMzMuMTM2LTk3LjI4MSw2MS4wMThDMjYuNjI5LDM3OS4zMzMsMCw0NDMuNjIsMCw1MTJoNDBjMC0xMTkuMTAzLDk2Ljg5Ny0yMTYsMjE2LTIxNnMyMTYsOTYuODk3LDIxNiwyMTYgICAgaDQwQzUxMiw0NDMuNjIsNDg1LjM3MSwzNzkuMzMzLDQzNy4wMiwzMzAuOTh6IE0yNTYsMjU2Yy01OS41NTEsMC0xMDgtNDguNDQ4LTEwOC0xMDhTMTk2LjQ0OSw0MCwyNTYsNDAgICAgYzU5LjU1MSwwLDEwOCw0OC40NDgsMTA4LDEwOFMzMTUuNTUxLDI1NiwyNTYsMjU2eiIgZmlsbD0iI2QzZDNkMyIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjwvZz48L3N2Zz4=');
        }

        &:focus {
          outline-color: ${({ theme }) => theme.colors.blue};
          border-color: ${({ theme }) => theme.colors.blue};
          background-image: none;
        }

        &:disabled {
          background-color: #dfdfdf;
          border: 1px solid #a7a7a7;
        }
      }

      label {
        font-size: 0.85em;
        position: absolute;
        top: 1.25em;
        left: 1.5em;
        background: #fff;
        padding: 0 0.5em;
      }

      button {
        outline: 0;
        border: 0;
        padding: 1.5em 2em;
        cursor: pointer;
        border-radius: 5px;
        background-color: ${({ theme }) => theme.colors.lightOrange};
      }

      &:focus-within label:not(.image-upload) {
        color: ${({ theme }) => theme.colors.blue};
        font-weight: 600;
      }
    }
  }
`;

export default Theme;
