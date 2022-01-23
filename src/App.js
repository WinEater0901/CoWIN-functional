import "bootstrap/dist/css/bootstrap.min.css";
import AppNavbar from "./commons/appNavbar";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Statistics from './Pages/Statistics';
import Welcome from "./Pages/Welcome";
import Certificate from "./Pages/Certificate";



function App() {
  return (
    
    <div style={{ 
      backgroundColor: "white",
      backgroundImage: `url("https://pmjay.gov.in/cowin/images/slider/slider-4.png")`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      height:750,
      width:1500,
      backgroundRepeat: 'no-repeat',
  
  marginTop: 0
  
    }}>
      <AppNavbar />
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/statistics" component={Statistics} />
        <Route exact path="/certificate" component={Certificate} />
      </Switch>
    </BrowserRouter>
    </div>
    
  );
}


export default App;
