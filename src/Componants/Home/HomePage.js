import { Link } from 'react-router-dom';
import Product from '../Inventory/Product';
import useHook from '../useHook/useHook';
import Carousel from './Carousel';


const Home = () => {
    const [products] = useHook();
    return (
        <div>
            <Carousel />
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
            <Link to='/AddProducts'><button className='btn btn-success'>Add New Product</button> </Link>
        </div>
    );
};

export default Home;