import './App.css';
import { Provider } from 'react-redux';
import MainHeader from './Container/MainHeader/MainHeader';
import store from './Store';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2c6629',
      darker: '#053e85',
    },
  },
});

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <MainHeader/>
        </ThemeProvider>
      </Provider>
    </div>
  );
}

export default App;
