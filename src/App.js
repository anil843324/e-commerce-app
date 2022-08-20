
import './App.css';
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import {Routes , Route } from "react-router-dom"
import CheckoutPage from "./pages/CheckoutPage"

function App() {
  return (
    <>

      <Navbar/> 
       <Routes>
        
         <Route path='/' element={ <Home/>}/>

          <Route path='/checkout' element={ <CheckoutPage/> } />
           
       </Routes>
        
     

    </>
  );
}

export default App;
