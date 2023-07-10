import Navbar from './components/Navbar';
import SaleSection from './components/SaleSection';
import CategoriesSection from './components/CategoriesSection';
import MainSlider from './components/MainSlider';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MainSlider/>
      <SaleSection/>
      <CategoriesSection/>
    </div>
  );
}

export default App;
