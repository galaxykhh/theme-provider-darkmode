import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import ThemeToggler from './components/ThemeToggler';
import { useThemeMode } from './Hooks/useThemeMode';
import GlobalStyle from './style/global';
import { lightTheme, darkTheme } from './style/theme';

function App() {
    const themeMode = useThemeMode();
    const mode = themeMode.theme === 'light' ? lightTheme : darkTheme;

    if (themeMode.mounted === false) return <div />

    return (
        <ThemeProvider theme={mode}>
            <GlobalStyle />
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' >
                        <div style={{
                            width: '500px',
                            height: '100px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            }}>
                            Theme will change
                        </div>
                    </Route>
                </Switch>
                <ThemeToggler toggler={themeMode.toggler} theme={themeMode.theme}/>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
