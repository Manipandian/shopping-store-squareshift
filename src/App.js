import './App.css';
import { Provider } from 'react-redux';
import MainHeader from './Container/MainHeader/MainHeader';
import store from './Store';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2c6629',
    },
    secondary: {
      main: '#382ca3',
    },
    action: {
      main: '#ffffff',
    },
  },
});

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <MainHeader />
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    </div>
  );
}

export default App;
