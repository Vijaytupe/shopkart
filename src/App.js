import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import Register from './Pages/Register';
import { Route, Routes } from 'react-router-dom';
import ProductCard from './Components/ProductCard';

function App() {
  return (
    <>
   
        <Navbar></Navbar>
        
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/Product' element={<Product></Product>}></Route>
        <Route path='Cart/' element={<Cart></Cart>}></Route>
        <Route path='/Login' element={<Login></Login>}></Route>
        <Route path='/Register' element={<Register></Register>}></Route>
      </Routes>
        <Footer></Footer>
      
      
      
      
      
      
      
    </>
  );
}

export default App;
