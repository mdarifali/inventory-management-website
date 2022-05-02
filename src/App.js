import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Footer from './Componants/Footer/Footer';
import Header from './Componants/Header/Header';
import Home from './Componants/Home/HomePage';
import Login from './Componants/Login/Login';
import RequireAuth from './Componants/RequireAuth/RequireAuth';
import ResetPassword from './Componants/ResePasswod/ResetPassword';
import Shop from './Componants/Shop/Shop';
import SingUp from './Componants/SingUp/SingUp';
import AddProducts from './Componants/AddProducts/AddProducts'


function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/shop' element={
          <RequireAuth>
            <Shop />
          </RequireAuth>
        } />
        <Route path='/AddProducts' element={<AddProducts />} />
        <Route path='/login' element={<Login />} />
        <Route path='/singup' element={<SingUp />} />
        <Route path='/resetpass' element={<ResetPassword />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
