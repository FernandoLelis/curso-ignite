import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';

import { defaultTheme } from './Styles/themes/default';
import { GlobalStyle } from './Styles/themes/global';
import { CyclesContexProvider } from './contexts/CyclesContext';


export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CyclesContexProvider>
        <Router />
        </CyclesContexProvider>        
        
      </BrowserRouter>      
      <GlobalStyle />
    </ThemeProvider>
  )
}
