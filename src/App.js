import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import ProductDetailPage from './pages/ProductDetailPage/ProductDetailPage';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route exact path='/productDetail/id:mobleId' element={<ProductDetailPage/>}/>
    </Routes>
  );
}

export default App;
