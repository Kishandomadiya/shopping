import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Routes, Route } from "react-router-dom";
import Second from './Second';
import Info from './info';
import Cart from './cart';            

function App() {


  return (
    <>
      <Routes>
         <Route path="/" element={ <Second/> } />
         <Route path="/Info/:id" element={ <Info/> } />
         <Route path="/Cart" element={ <Cart/> } />
      </Routes>
    </>
  );
}

export default App;
