import Login from './components/Login';
import Category from './components/Category';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import ProductDetails from './components/ProductDetails';
import UpperSlider from './components/UpperSlider';
import { Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <UpperSlider/>
      <Routes>
        
        <Route exact path='/' element={<HomePage/>} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/categories/:slug' element={<Category />} />
        <Route exact path='/product/:slug' element={<ProductDetails/>}/>
        <Route exact path='/cart' element={<Cart/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
