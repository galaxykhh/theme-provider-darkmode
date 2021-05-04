import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GlobalStyle from './style/global';

function App() {
  return (
    <>
        <GlobalStyle />
        <BrowserRouter>
            <Switch>
                <Route exact path='/' >
                    default
                </Route>
            </Switch>
        </BrowserRouter>
    </>
  );
}

export default App;
