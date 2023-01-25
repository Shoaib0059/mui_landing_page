
import './App.css';
import HeroPage from './Components/HeroPage';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Clients from './Components/Clients';
import Contact_us from './Components/Contact';
const theme = createTheme({
  status: {
    danger: "#ffff",
  },

});

function App() {
  return (
    <ThemeProvider theme={theme}>
        <HeroPage/> 
        <Clients/>
        <Contact_us/>
    </ThemeProvider>

  );
}

export default App;
