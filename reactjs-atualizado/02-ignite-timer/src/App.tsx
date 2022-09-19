import { ThemeProvider } from 'styled-components';
import { Button } from './components/Button';


import { defaultTheme } from './Styles/themes/default';
import { GlobalStyle } from './Styles/themes/global';


export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button variant="primary" />
      <Button variant="secondary" />
      <Button variant="success" />
      <Button variant="danger" />
      <Button />

      <GlobalStyle />
    </ThemeProvider>
  )
}
