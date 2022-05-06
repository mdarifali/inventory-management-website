import Product from '../Inventory/Product';
import './HomePage.css';
import useHook from '../useHook/useHook';
import HeaderImg from '../Images/top-header.img.jpg';
import ManageImg from '../Images/banner-img.jpg'
import { Link } from 'react-router-dom';
import Sponsor from './Sponsor';
import ContactUs from './ContactUs';


const Home = () => {
    const [products] = useHook();
    
    return (
        <div>
            <section className='container-fluid p-0'>
                <div className="card position-relative">
                    <img id='banner-img' className='img-fluid w-100' src={HeaderImg} alt="" />
                    <div className="card-img-overlay ">
                        <div className='position-absolute top-50 start-50 translate-middle text-center'>
                            <h1 className="header-title">Welcome to our Inventory Management Website</h1>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className='container'>
                <div className="row g-5">
                    <h1 className='text-center'>Total Product: {products.length}</h1>
                    {
                        products.slice(0, 6).map(product => <Product
                            key={product._id}
                            product={product}
                        />)
                    }
                </div>
            </section>
            <section className='container my-5'>
                <div className="card text-secondary position-relative">
                    <img id='banner-img' src={ManageImg} className="card-img" alt="." />
                    <div className="card-img-overlay ">
                        <div className='position-absolute top-50 start-50 translate-middle text-center'>
                            <h1 className="card-title py-2">Manage your all products items</h1>
                            <Link to='/ManageProducts'><button className='btn btn-success btn-lg'>Manage Inventory Products</button></Link>
                        </div>
                    </div>
                </div>
            </section>
            <Sponsor />
            <ContactUs />
        </div>
    );
};

export default Home;