import './App.css';
import Buyphone from './components/Buyphone';
import Container from './components/Container';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";

import Homee from './components/Homee';


function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
   
   <Route path="/" element={<Homee/>} />
   <Route path="/" element={<Container/>} />
    <Route path="Buyphone" element={<Buyphone/>} />
    <Route path="/" element={<Newsletter/>} />
    <Route path="/" element={<Footer title="Mobile base"/>} />
    
   

   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
