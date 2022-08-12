import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter as Router } from 'react-router-dom';

declare module '@mui/material/styles' {
  interface Theme {
    palette: {
      primary: {
        light:string,
        main:string,
        contrastText:string,
      },
      secondary: {
        main:string,
        light:string,
      },
  
    },
    typography: {
      body1: {
        fontWeight:number,
        fontSize:string
      },
      body2: {
        fontSize:string,
      },
      fontFamily: string[],
    },
  }
}

const theme = createTheme({
  palette: {
    primary: {
      light: '#7BB32E',
      main: '#075921',
      contrastText: '#26362C',
    },
    secondary: {
      main: '#e50714',
      light: '#FC2405',
    },

  },
  typography: {
    body1: {
      
      fontWeight: 700,
      fontSize: '1.1rem'
    },
    body2: {
      fontSize: '1.35rem',
      '@media (max-width:576px)': {
        fontSize: '0.875rem',
      },
    },
    fontFamily: [
      'Axiforma',
      'Nunito',
      'sans-serif'
    ].join(','),
  },

})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router>
        <App />
      </Router>  
    </ThemeProvider>
  </React.StrictMode>
);

