import Login from './components/Login';
import Category from './components/Category';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import ProductDetails from './components/ProductDetails';
import { Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Orders from './components/Orders';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<HomePage/>} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/categories/:slug' element={<Category />} />
        <Route exact path='/product/:slug' element={<ProductDetails/>}/>
        <Route exact path='/cart' element={<Cart/>}/>
        <Route exact path='/orders' element={<Orders/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
