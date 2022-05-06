import { Link } from 'react-router-dom';
import useHook from '../useHook/useHook';
import Product from './Product';


const Inventory = () => {

    const [products] = useHook();

    return (
        <section className='container'>
            <div className="row g-5">
                <h1 className='text-center'>Total Product: {products.length}</h1>
                {
                    products.map(product =>

                        <div key={product._id} className='col-md-4'>
                            <div className="card h-100 shadow-lg">
                                <img className="card-img-top" src={product.img} alt="" />
                                <div className="card-body">
                                    <h4 className="card-title">{product.name}</h4>
                                    <h5>Description: </h5><p>{product.description}</p>
                                    <h5>Price: <span className='fw-bold'>${product.price}</span></h5>
                                    <p className='m-0'>Seller: {product.seller}</p>
                                    <p>Quantity: {product.quantity}</p>
                                    {product.email ? <p>Email:{product.email}</p> : <span className='text-danger'>Email: Not found</span>}
                                </div>
                                {/* <Link to={`/ProductDetails/${product._id}`} className='btn btn-outline-success d-flex justify-content-center align-items-center p-3'>
                                Stock Update <MdOutlineSystemUpdateAlt className='ms-2 fs-4' />
                            </Link> */}
                            </div>
                        </div>)
                }
            </div>
        </section>
    );
};

export default Inventory;