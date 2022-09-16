import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import ProductDetailPage from './pages/ProductDetailPage/ProductDetailPage';
import { BrowserRouter as Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/productDetail' element={<ProductDetailPage/>}/>
    </Routes>
  );
}

export default App;
