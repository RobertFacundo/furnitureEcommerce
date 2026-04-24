import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Shop from './views/Shop';
import Contact from './views/Contact';
import Cart from './views/Cart';
import MainLayout from './shared/components/MainLayout';

function App() {

  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cart' element={<Cart />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
