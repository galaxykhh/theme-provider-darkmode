import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './style/global';
import { theme } from './style/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
            <Switch>
                <Route exact path='/' >
                    default
                </Route>
            </Switch>
        </BrowserRouter>
      </ThemeProvider>
  );
}

export default App;
