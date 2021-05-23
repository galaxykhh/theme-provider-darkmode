import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import ThemeToggler from './components/ThemeToggler';
import { useThemeMode } from './Hooks/useThemeMode';
import GlobalStyle from './style/global';
import { lightTheme, darkTheme } from './style/theme';

function App() {
    const themeMode = useThemeMode();
    const mode = themeMode.theme === 'light' ? lightTheme : darkTheme;

    return (
        <ThemeProvider theme={mode}>
            <GlobalStyle />
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' >
                        Theme will change
                    </Route>
                </Switch>
                <ThemeToggler toggler={themeMode.toggler} theme={themeMode.theme}/>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
