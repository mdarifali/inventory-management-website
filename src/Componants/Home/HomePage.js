import Product from '../Products/Product';
import './HomePage.css';
import useHook from '../useHook/useHook';
import HeaderImg from '../Images/top-header.img.jpg';
import ManageImg from '../Images/banner-img.jpg'
import { Link } from 'react-router-dom';
import Sponsor from './Sponsor';
import ContactUs from './ContactUs';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';


const Home = () => {
    
    const [products, loading] = useHook()

    return (
        <div>
            <section className='container-fluid p-0 my-5'>
                <div className="card">
                    <img id='banner-img' className='img-fluid w-100' src={HeaderImg} alt="" />
                    <div className="card-img-overlay ">
                        <div className='text-center my-lg-5 p-lg-5'>
                            <h1 className="header-title my-lg-5 p-lg-5">Welcome to our Inventory Management Website</h1>
                        </div>
                    </div>
                </div>
            </section>
            <>
                {loading ? <LoadingSpinner /> :

                    (<section className='container my-4'>
                        <div className="row g-5">
                            <div className="section-header">
                                <h1 className="text-center">INVENTORY ITEMS</h1>
                            </div>
                            {
                                products.slice(0, 6).map(product => <Product
                                    key={product._id}
                                    product={product}
                                />)
                            }
                        </div>
                    </section>)
                }
            </>
            <section className='container my-5'>
                <div className="card text-dark">
                    <img id='banner-img' src={ManageImg} alt="." />
                    <div className="card-img-overlay ">
                        <div className=' text-center my-lg-5'>
                            <h1 className="card-title my-lg-5">Manage your all products items</h1>
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