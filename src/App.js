import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import Footer from './Componants/Footer/Footer';
import Header from './Componants/Header/Header';
import Home from './Componants/Home/HomePage';
import Login from './Componants/Login/Login';
import RequireAuth from './Componants/RequireAuth/RequireAuth';
import ResetPassword from './Componants/ResePasswod/ResetPassword';
import Inventory from './Componants/Inventory/Inventory';
import SingUp from './Componants/SingUp/SingUp';
import AddProducts from './Componants/AddProducts/AddProducts';
import ManageProducts from './Componants/ManageProducts/ManageProducts';
import ProductDetails from './Componants/ProductDetails/ProductDetails';
import Blogs from './Componants/Blogs/Blogs';


function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/inventory' element={
          <RequireAuth>
            <Inventory />
          </RequireAuth>
        } />
        <Route path='ProductDetails/:id' element={
          <RequireAuth>
            <ProductDetails />
          </RequireAuth>
        } />
        <Route path='/AddProducts' element={
          <RequireAuth>
            <AddProducts />
          </RequireAuth>
        } />
        <Route path='/ManageProducts' element={
          <RequireAuth>
            <ManageProducts />
          </RequireAuth>
        } />
        <Route path='/login' element={<Login />} />
        <Route path='/singup' element={<SingUp />} />
        <Route path='/resetpass' element={<ResetPassword />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
