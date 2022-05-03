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
                                    <h4 class="card-title">{product.name}</h4>
                                    <p>Description: <span>{product.description}</span></p>
                                    <h5>Price: <span className='fw-bold'>${product.price}</span></h5>
                                    <p className='m-0'>Brand: {product.seller}</p>
                                    <p>Stock: {product.stock}</p>
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