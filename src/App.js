import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Componants/Header/Header';
import Home from './Componants/Home/HomePage';
import Shop from './Componants/Shop/Shop';

function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/shoping' element={<Shop />} />
      </Routes>
    </div>
  );
}

export default App;
