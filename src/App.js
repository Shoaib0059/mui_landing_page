
import './App.css';
import HeroPage from './Components/HeroPage';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Clients from './Components/Clients';
import Footer from './Components/Footer';
const theme = createTheme({
  status: {
    danger: "#ffff",
  },
  breakpoints :{
    keys:["xs" , "sm" , "md" ,"lg", "xl" ],
values:{
    xs:200,
    sm :500,
    md:830,
    lg:1300,
}
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
        {/* <HeroPage show={"column"} /> */}
        <HeroPage show ={'column-reverse'} color="red" /> 
        <Clients/>
        <Footer/>
    </ThemeProvider>

  );
}

export default App;
