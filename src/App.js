import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Componants/Header/Header';
import Home from './Componants/Home/HomePage';
import Login from './Componants/Login/Login';
import Shop from './Componants/Shop/Shop';

function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/login' element={<Login />} />

      </Routes>
    </div>
  );
}

export default App;
